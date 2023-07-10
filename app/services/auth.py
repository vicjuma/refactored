from sqlalchemy import or_
from app.database import get_db
from app.models.model import User
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import Depends, status, HTTPException
from app.models.schema import UserSchema
from contextlib import closing
from app.utils.functions import check_password_hash, load_user, manager
from fastapi.responses import RedirectResponse
from fastapi_restful.api_model import APIMessage


def loginUser(data: OAuth2PasswordRequestForm = Depends()):
    username = data.username
    password = data.password

    user = load_user(username)
    if not user:
        raise HTTPException(
            status_code=401, detail="Invalid username or email")
    if not check_password_hash(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid password")

    elif user.role.lower() == "student":
        access_token = manager.create_access_token(
                    data={"sub": username}
                )
        resp = RedirectResponse("/api/users/ask/question",
                                status_code=status.HTTP_302_FOUND)
        manager.set_cookie(resp, access_token)
        return resp
    access_token = manager.create_access_token(
                data={"sub": username}
            )
    resp = RedirectResponse("/api/users/my/answers",
                            status_code=status.HTTP_302_FOUND)
    manager.set_cookie(resp, access_token)
    return resp


def isUserinDb(user: UserSchema):
    username = user.username
    password = user.password

    with closing(get_db()) as db:
        user = db.query(User).filter(
            or_(User.username == username, User.email == username)).first()
        if not user:
            message = "Username not in db"
            return APIMessage(
                            detail=message,
                            status_code=status.HTTP_200_OK
                        )
        if not check_password_hash(password, user.password):
            message = "Invalid password"
            return APIMessage(
                            detail=message,
                            status_code=status.HTTP_200_OK
                        )
