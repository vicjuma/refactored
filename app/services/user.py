from starlette.requests import Request
from app.database import create_tables, get_db
from app.models.model import User, Tutor
from app.models.schema import UserSchema
from app.utils.functions import get_templates, check_password_hash
from app.utils.functions import generate_password, \
    generate_password_hash, set_password, decode_access_token, manager, \
    load_user
from fastapi_restful.api_model import APIMessage
from fastapi import status, HTTPException, Depends
from sqlalchemy.orm import Session
from contextlib import closing
from sqlalchemy import exists
from sqlalchemy import or_
from fastapi.responses import RedirectResponse


templates = get_templates()


"""BEGINNING OF STUDENT RESOURCE"""


async def create_user(user: UserSchema,
                      request: Request, db: Session = Depends(get_db)):
    username = user.username
    email = user.email
    role = user.role
    payload = {}

    with closing(get_db()) as db:
        create_tables()
        user_email = db.query(User).filter(User.email == email).first()
        user_name = db.query(User).filter(User.username == username).first()

        if user_name and user_email:
            message = "Username and Email Exist"
            # return templates.TemplateResponse(
            #     'success/email_and_username_exist.html', {
            #         "request": request, "message": message})
            return APIMessage(
                            detail=message,
                            status_code=status.HTTP_200_OK
                        )
        elif user_name:
            message = "Username Exists"
            # return templates.TemplateResponse(
            #     'success/username_exists.html', {
            #         "request": request, "message": message})
            return APIMessage(
                            detail=message,
                            status_code=status.HTTP_200_OK
                        )
        elif user_email:
            message = "Email Exists"
            # return templates.TemplateResponse(
            #     'success/email_exists.html', {
            #         "request": request, "message": message})
            return APIMessage(
                            detail=message,
                            status_code=status.HTTP_200_OK
                        )
        else:
            password = generate_password()
            password_hashed = generate_password_hash(password)
            new_user = User(
                username=username,
                email=email,
                password=password_hashed,
                role=role
            )
            db.add(new_user)
            db.commit()

            if role.lower() == 'tutor':
                new_tutor = Tutor(user_id=new_user.id)
                db.add(new_tutor)
                db.commit()

            # Send mail to Student to Set his password
            user = db.query(User).filter(User.email == email).first()
            if user:
                try:
                    payload["username"] = username
                    payload["password"] = password
                    created_user = db.query(
                        User).filter(User.email == email).first()
                    payload["id"] = created_user.id
                    payload["email"] = created_user.email
                    set_password(payload)
                    message = "Email sent successfully"
                    # return templates.TemplateResponse(
                    #     'success/email_sent.html', {
                    #         "request": request, "message": message})
                    return APIMessage(
                            detail=message,
                            status_code=status.HTTP_201_CREATED
                        )
                except Exception:
                    return APIMessage(
                            detail="Password email not sent",
                            status_code=status.HTTP_400_BAD_REQUEST
                        )
            raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail="User not found"
                )


async def get_username(username: str, db: Session = Depends(get_db)):
    with closing(get_db()) as db:
        user_exists = db.query(exists().where(
            User.username == username)).scalar()
        return {"Exists": user_exists}


async def get_user(username: str, password: str,
                   db: Session = Depends(get_db)):
    with closing(get_db()) as db:
        user_exists = db.query(exists().where(
            or_(User.username == username, User.email == username))).scalar()
        user = db.query(User).filter(or_(
                User.username == username, User.email == username)).first()
        if user_exists and not check_password_hash(password, user.password):
            user_exists = False
        return {"Exists": user_exists}


async def verify_token(token: str, db: Session = Depends(get_db)):
    decoded_token = decode_access_token(token)
    print(decoded_token)
    user = db.query(User).filter(User.id == decoded_token).first()

    if not user:
        return RedirectResponse("/permission/denied",
                                status_code=status.HTTP_403_FORBIDDEN)
    else:
        if user.role == "student":
            access_token = manager.create_access_token(
                    data={"sub": user.username}
                )
            load_user(user.username)
            resp = RedirectResponse("/api/users/ask/question",
                                    status_code=status.HTTP_302_FOUND)
            manager.set_cookie(resp, access_token)
            return resp
    access_token = manager.create_access_token(
            data={"sub": user.username}
        )
    load_user(user.username)
    resp = RedirectResponse("/api/users/my/answers",
                            status_code=status.HTTP_302_FOUND)
    manager.set_cookie(resp, access_token)
    return resp


"""END OF STUDENT RESOURCE"""


"""BEGINNING OF TUTOR RESOURCE"""
