from fastapi.templating import Jinja2Templates
from passlib.context import CryptContext
from typing import Dict, Any
import random
import string
import jwt
import os
import smtplib
import ssl
from contextlib import closing
from datetime import datetime, timedelta
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from fastapi_login import LoginManager
from fastapi import Depends, HTTPException
from app.database import get_db
from app.models.model import User
from sqlalchemy.orm import Session
from sqlalchemy import or_


password_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
ALGORITHM = "HS256"
JWT_SECRET_KEY = os.environ['JWT_SECRET_KEY']
SENDER_MAIL = os.environ['SENDER_MAIL']
MAIL_SERVER = os.environ['MAIL_SERVER']
PASSWORD = os.environ['PASSWORD']
PORT = os.environ['PORT']
SECRET = os.environ['SECRET']

EXPIRATION_TIME_MINUTES = 120
manager = LoginManager(SECRET, "api/auth/login", use_cookie=True)
manager.cookie_name = "studyalliescookie"
mail_context = ssl.create_default_context()
manager.default_expiry = timedelta(minutes=EXPIRATION_TIME_MINUTES)


@manager.user_loader()
def load_user(username: str, db: Session = Depends(get_db)):
    with closing(get_db()) as db:
        user = db.query(User).filter(
            or_(User.username == username, User.email == username)
        ).first()
        return user


def get_templates():
    return Jinja2Templates("app/templates")


def generate_password(length=10):
    characters = string.ascii_letters + string.digits
    password = ''.join(random.choice(characters) for _ in range(length))
    return password


def generate_password_hash(password: str) -> str:
    return password_context.hash(password)


def check_password_hash(password: str, hashed_passd: str) -> bool:
    return password_context.verify(password, hashed_passd)


def create_access_token(subject) -> str:
    payload = {
        'exp': datetime.utcnow() + timedelta(days=2, minutes=30),
        'iat': datetime.utcnow(),
        'scope': 'access_token',
        'sub': subject
    }
    return jwt.encode(
        payload,
        JWT_SECRET_KEY,
        algorithm=ALGORITHM
    )


def generate_mail_reset_token(User: Dict[str, Any]):
    return create_access_token(
                    subject=User['id']
                )


def send_mail(recepient, message):
    with smtplib.SMTP_SSL(MAIL_SERVER,
                          PORT, context=mail_context) as server:
        server.login(SENDER_MAIL, PASSWORD)
        server.sendmail(SENDER_MAIL, recepient, str(message))


def set_password(user: Dict[str, Any]):
    print(user)
    set_html = f"""

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>StudyAllies Account Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; font-size: 14px;">
        <div style="text-align: center; margin-bottom: 30px;">
            <img src="/static/assets/images/permission_denied.png"\
                style="max-width:150px;">
        </div>
        <p>Hello {user['username']},</p><br />
        <p>You've recently registered a new StudyAllies account.</p>
        <p>Before your account is activated, \
            we need you to confirm your email address.</p>
        <p style="margin-bottom: 10px;">
        Please click this link to complete your registration:</p>
        <p style="margin-bottom: 10px;">
        <a href="http://127.0.0.1:8000/api/users/verify/{
            generate_mail_reset_token(user)}">
            http://127.0.0.1:8000/create/password/{
                generate_mail_reset_token(user)}</a></p><br /><br />
        <p>You can log into your account using your details:</p>
        <p><strong>Username</strong>: {user['username']}</p>
        <p><strong>Password</strong>: {user['password']}</p>
        <p>If you have any questions, please contact us for assistance.</p>
        <p>Best Regards,</p>
        <p>StudyDaddy</p><br /><br /><br />
        <p>To ensure that our messages get to you \
            (and don't go to your junk or bulk email folders), please add
            <a href="mailto:support@studyallies.com">
            support@studyallies.com
            </a> to your address book.</p>
    </body>
    </html>
    """
    message = MIMEMultipart()
    message['From'] = SENDER_MAIL
    message['To'] = user['email']
    message['Subject'] = "StudyAllies"

    message.attach(
            MIMEText(
                set_html, "html"
            )
        )
    send_mail(
            user['email'],
            message
        )


def reset_password(self, User) -> None:
    reset_html = f"""
        <html>
            <body>
                <h1>Request for Password Reset</h1>
                <p>
                    Click the link below to reset your password
                    <a href="http://141.95.42.124/reset/password?token={
                        generate_mail_reset_token(User)}">
                        reset password</a>
                </p>
            </body>
        </html>
    """
    message = MIMEMultipart()
    message['From'] = SENDER_MAIL
    message['To'] = User['email']
    message['Subject'] = "Request for Password reset"

    message.attach(
            MIMEText(
                reset_html, "html"
            )
        )
    self.send_mail(
            User['email'],
            message
        )


def decode_access_token(token: str):
    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=[ALGORITHM])
        if (payload['scope'] == 'access_token'):
            return payload['sub']
        raise HTTPException(status_code=401,
                            detail='Scope for the token is invalid')
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail='Token expired')
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail='Invalid token')
