from fastapi import APIRouter, status
from starlette.requests import Request
from app.utils.functions import get_templates
from sqlalchemy.orm import Session
from fastapi import Depends
from app.database import get_db
from app.models.model import Task, Subject
from sqlalchemy import or_
from app.utils.functions import manager
from fastapi.responses import RedirectResponse

router = APIRouter(prefix='')
templates = get_templates()


@router.get("/", status_code=status.HTTP_200_OK)
def home(request: Request, user=Depends(manager.optional)):
    print(user)
    return templates.TemplateResponse(
        'public/index.html', {"request": request, "user": user})


@router.get("/how/it/works")
def getPrivateendpoint(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/how_it_works.html', {"request": request, "user": user})


@router.get("/homework/answers", status_code=status.HTTP_200_OK)
def getTasks(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/homework_answers.html', {"request": request, "user": user})


@router.get("/ask/a/question")
def askAQuestion(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/ask_a_question.html', {"request": request, "user": user})


@router.get("/ask/a/question/step2")
def askAQuestionNext(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/ask_step_2.html', {"request": request, "user": user})


@router.get("/top/tutors")
def topTutors(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/top_tutors.html', {"request": request, "user": user})


@router.get("/faqs")
def FAQs(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse('public/faqs.html', {
        "request": request, "user": user})


# @router.get("/search")
# async def search(request: Request, query: str,
#                  category: str, db: Session = Depends(get_db)):
#     results = []
#     # Perform the search query
#     tasks = db.query(Task).join(Subject).filter(
#         or_(
#             Task.title.ilike(f"%{query}%"),
#             Task.content.ilike(f"%{query}%")
#         ),
#         # Subject.name.ilike(f"%{category}%")
#     ).distinct(Task.id).all()
#     print(tasks)
#     for task in tasks:
#         results.append({
#             "id": task.id,
#             "title": task.title,
#             "timeline": task.timeline,
#             "amount": task.amount,
#             "content": task.content,
#             "status": task.status,
#             "receive_emails": task.receive_emails,
#             "student_id": task.student_id,
#             "tutor_id": task.tutor_id,
#             "subject_id": task.subject_id,
#             "created_at": task.created_at,
#             "modified_at": task.modified_at
#         })

#     return templates.TemplateResponse(
#         'tutor/find_search.html', {"request": request, "results": results})


@router.get("/contact/us")
def contactUs(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/contact_us.html', {"request": request, "user": user})


@router.get("/privacy/policies")
def privacy(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/privacy.html', {"request": request, "user": user})


@router.get("/terms")
def terms(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/terms.html', {"request": request, "user": user})


@router.get("/dmca/notice")
def dmca(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/dmca.html', {"request": request, "user": user})


@router.get("/site/map")
def siteMap(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/sitemap.html', {"request": request, "user": user})


@router.get("/become/a/tutor")
def becomeTutor(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/become_a_tutor.html', {"request": request, "user": user})


@router.get("/auth/a/login")
def login(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/login.html', {"request": request, "user": user})


@router.get("/single/question")
def singleQuestion(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/single_question.html', {"request": request, "user": user})


@router.get("/answered/question")
def answeredQuestion(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/answered_question.html', {"request": request, "user": user})


@router.get("/single/tutor")
def singleTutor(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/single_tutor.html', {"request": request, "user": user})


@router.get("/forgort/password")
def forgotPassword(request: Request, user=Depends(manager.optional)):
    return templates.TemplateResponse(
        'public/forgot_password.html', {"request": request, "user": user})


@router.get("/search")
def searchSite(request: Request,
               user=Depends(manager.optional),
               db: Session = Depends(get_db)):
    url = str(request.url)
    return RedirectResponse(url)
