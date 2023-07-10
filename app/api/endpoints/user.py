from app.services.user import create_user, get_username, get_user, \
    verify_token
from starlette.requests import Request
from fastapi import APIRouter, Depends, status, WebSocket
from sqlalchemy.orm import Session
from app.database import get_db, create_tables
from app.models.schema import UserSchema
from app.utils.functions import get_templates, manager
from app.models.model import Task, Bid, TaskAnswer, TaskFile, \
    Tutor, User, Transaction, Subject, Chat
from sqlalchemy import func
from fastapi.responses import RedirectResponse

router = APIRouter()
templates = get_templates()


class ConnectionManager:
    def __init__(self):
        self.active_connections = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_message(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)


chat_manager = ConnectionManager()


@router.post("/create")
async def register(user: UserSchema, request: Request):
    return await create_user(user, request)


@router.get("/check_username/{username}")
async def find_username(username: str, db: Session = Depends(get_db)):
    return await get_username(username, db)


@router.get("/check_user/{email}/{password}")
async def find_email(email: str, password, db: Session = Depends(get_db)):
    return await get_user(email, password, db)


@router.get("/create_tables")
async def create_database_tables():
    create_tables()


'''Student Routes'''


@router.get("/ask/question", status_code=status.HTTP_200_OK)
def studentAsksQuestion(request: Request, user=Depends(manager)):
    if user.role != 'tutor':
        return templates.TemplateResponse(
            'student/student_ask_question.html', {
                "request": request, "student": user})


@router.get("/my/questions", status_code=status.HTTP_200_OK)
def studentChecksQuestions(request: Request,
                           user=Depends(manager),
                           db: Session = Depends(get_db)):
    tasks = db.query(Task).filter(Task.student_id == user.id).all()
    if len(tasks) > 0:
        task_id = tasks[0].id
        bids = db.query(
            func.count(Bid.id)).filter(Bid.task_id == task_id).scalar()
        answers = db.query(
            func.count(TaskAnswer.id)).filter(
                TaskAnswer.task_id == task_id).scalar()
    else:
        bids = []
        tasks = []
        answers = []
    return templates.TemplateResponse(
        'student/questions.html', {"request": request,
                                   "student": user,
                                   "tasks": tasks, "bids": bids,
                                   "answers": answers})


@router.get("/my/questions/{task_id}",
            status_code=status.HTTP_200_OK)
def studentCheckSingleQuestion(request: Request, task_id,
                               _=Depends(manager),
                               db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    files = db.query(TaskFile).filter(TaskFile.task_id == task_id).all()
    bids = db.query(Bid).filter(Bid.task_id == task_id).all()
    join_query = db.query(
        Bid, Tutor, User).join(
            Tutor, Tutor.id == Bid.bidder_id).join(
                User, User.id == Tutor.user_id)
    bid_task = join_query.all()

    return templates.TemplateResponse(
        'student/student-log.html', {
            "request": request, "task": task, "files": files,
            "bids": bids, "bid_task": bid_task})


@router.get("/my/questions/{task_id}/{bid_id}",
            status_code=status.HTTP_200_OK)
async def getChatTutor(request: Request, bid_id,
                       user=Depends(manager),
                       db: Session = Depends(get_db)):
    chats = db.query(Chat).filter(Chat.bid_id == bid_id).all()
    bid = db.query(Bid).get(bid_id)
    return templates.TemplateResponse(
        'student/single_bid.html', {"request": request,
                                    "chats": chats, "user": user,
                                    "bid": bid})


@router.post("/my/questions/{task_id}/{bid_id}",
             status_code=status.HTTP_200_OK)
async def chatTutor(request: Request, task_id, bid_id,
                    user=Depends(manager),
                    db: Session = Depends(get_db)):
    bid = db.query(Bid).get(bid_id)
    student = user
    form_data = await request.form()
    message = form_data.get("message")
    new_chat = Chat(message=message,
                    sender_id=user.id,
                    recipient_id=student.id,
                    bid_id=bid.id)

    db.add(new_chat)
    db.commit()
    redirect_url = request.url.path
    return RedirectResponse(
        url=redirect_url,
        status_code=status.HTTP_302_FOUND)


@router.get("/balance", status_code=status.HTTP_200_OK)
def studentCheckBalance(request: Request, user=Depends(manager),
                        db: Session = Depends(get_db)):
    student = db.query(User).filter(User.username == user.username).first()
    student_transactions = db.query(
        Transaction).filter(
            Transaction.student_id == user.id).all()
    return templates.TemplateResponse(
        'student/balance.html', {"request": request,
                                 "student": student,
                                 "student_transactions": student_transactions})


@router.get("/support", status_code=status.HTTP_200_OK)
def getSupport(request: Request, student=Depends(manager)):

    return templates.TemplateResponse(
        'student/support.html', {"request": request, "student": student})


@router.get("/profile/{username}",
            status_code=status.HTTP_200_OK)
def getProfile(request: Request, username: str, _=Depends(manager),
               db: Session = Depends(get_db)):
    student = db.query(User).filter(User.username == username).first()
    print(student)
    return templates.TemplateResponse(
        'student/profile.html', {"request": request, "student": student})


@router.get("/verify/{token}", status_code=status.HTTP_200_OK)
async def verify_me(token: str, db: Session = Depends(get_db)):
    return await verify_token(token, db)


@router.get("/payment/verify")
def verifyPayment(request: Request, user=Depends(manager),
                  db: Session = Depends(get_db)):
    amount = request.query_params.get('amount')
    new_transaction = Transaction(
        amount=amount,
        student_id=user.id
    )
    db.add(new_transaction)
    db.commit()
    return RedirectResponse(url="/api/users/balance",
                            status_code=status.HTTP_302_FOUND)


"""Tutor Routes"""


@router.get("/my/answers", status_code=status.HTTP_200_OK)
def tutor_answers(request: Request, user=Depends(manager)):
    return templates.TemplateResponse('tutor/answers.html',
                                      {"request": request, "user": user})


@router.get("/tutor/available/tasks")
def getStudentTasks(request: Request,
                    user=Depends(manager),
                    db: Session = Depends(get_db)):
    # tasks = db.query(Task).all()
    join_query = db.query(
        Task, Subject).join(Subject)
    subj_task = join_query.all()
    return templates.TemplateResponse(
        'tutor/find.html',
        {"request": request, "user": user, "subj_task": subj_task})


@router.get("/tutorials/view")
def ViewTutorials(request: Request, user=Depends(manager)):
    return templates.TemplateResponse('tutor/tutorials.html',
                                      {"request": request, "user": user})


@router.get("/payments/view")
def ViewPayments(request: Request, user=Depends(manager)):
    return templates.TemplateResponse('tutor/payment.html',
                                      {"request": request, "user": user})


@router.get("/payments/withdraw")
def WithdrawPayments(request: Request, user=Depends(manager)):
    return templates.TemplateResponse('tutor/withdraw.html',
                                      {"request": request, "user": user})


@router.get("/support/tutor/request")
def RequestSupport(request: Request, user=Depends(manager)):
    return templates.TemplateResponse(
        'tutor/tutor_support.html', {"request": request, "user": user})


@router.get("/send/proposal")
def sendProposal(request: Request, _=Depends(manager)):
    return templates.TemplateResponse(
        'tutor/send_proposal.html', {"request": request})


@router.get("/tutor/password/update")
def PasswordUpdateTutor(request: Request, user=Depends(manager)):
    return templates.TemplateResponse(
        'tutor/tutor_password_update.html', {"request": request, "user": user})


@router.get("/tutor/emails/subscribe")
def emailSubscriptionTutor(request: Request, user=Depends(manager)):
    return templates.TemplateResponse(
        'tutor/tutor_subscribe.html', {"request": request, "user": user})


@router.get("/tutor/feedback/view")
def tutorFeedbacks(request: Request, user=Depends(manager)):
    return templates.TemplateResponse(
        'tutor/tutor_review.html', {"request": request, "user": user})


@router.get("/tutor/task/view/{task_id}", status_code=status.HTTP_200_OK)
def tutorSingleTask(request: Request, task_id,
                    user=Depends(manager),
                    db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    tutor = db.query(Tutor).filter(Tutor.user_id == user.id).first()
    bid = db.query(Bid).filter(Bid.bidder_id == tutor.id).first()
    chats = None
    if bid:
        chats = db.query(Chat).filter(Chat.bid_id == bid.id)
    print(bid)
    return templates.TemplateResponse(
        'tutor/log-question.html', {
            "request": request, "task": task,
            "user": user, "bid": bid, "chats": chats})


@router.post("/tutor/task/view/{task_id}")
async def bidTask(request: Request, task_id: str,
                  db: Session = Depends(get_db),
                  user=Depends(manager)):
    tutor = db.query(Tutor).filter(Tutor.user_id == user.id).first()
    task = db.query(Task).get(task_id)
    student = db.query(User).get(task.student_id)
    bid = db.query(Bid).filter(Bid.task_id == task_id).first()
    form_data = await request.form()
    form_name = form_data.get("formType")
    print(form_name)
    if form_name == "formTwo":
        message = form_data.get("message")
        price = form_data.get("price")
        new_bid = Bid(message=message,
                      task_id=task_id,
                      bidder_id=tutor.id,
                      bid_amount=price)

        db.add(new_bid)
        db.commit()
    else:
        message = form_data.get("message")
        new_chat = Chat(message=message,
                        sender_id=user.id,
                        recipient_id=student.id,
                        bid_id=bid.id)

        db.add(new_chat)
        db.commit()
    redirect_url = request.url.path
    return RedirectResponse(
        url=redirect_url,
        status_code=status.HTTP_302_FOUND)


"""Combined Routes"""


@router.get('/logout')
def logout_route(_=Depends(manager)):
    resp = RedirectResponse(url="/",
                            status_code=status.HTTP_302_FOUND)
    manager.set_cookie(resp, "")
    return resp


@router.get("/tutor/profile/view/{username}")
def TutorProfile(request: Request, username: str, user=Depends(manager)):
    return templates.TemplateResponse('tutor/index.html',
                                      {"request": request, "user": user})
