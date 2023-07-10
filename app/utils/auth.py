import jwt
import os
import smtplib
from typing import Dict, Any
from datetime import datetime, timedelta


class AuthUtil:
    def __init__(self):
        self.JWT_SECRET_KEY = os.environ['JWT_SECRET_KEY']
        self.ALGORITHM = "HS256"
        self.PORT = 465
        self.PASSWORD = "jumavic@9118"
        self.SENDER_MAIL = "info@mouseinc.net"
        self.MAIL_SERVER = 'mail.mouseinc.net'

    def generate_mail_reset_token(self, User: Dict[str, Any]):
        return self.create_access_token(subject=User['id'])

    def create_access_token(self, subject) -> str:
        payload = {
            'exp': datetime.utcnow() + timedelta(days=2, minutes=30),
            'iat': datetime.utcnow(),
            'scope': 'access_token',
            'sub': subject
        }
        return jwt.encode(
            payload,
            self.JWT_SECRET_KEY,
            algorithm=self.ALGORITHM
        )

    def send_mail(self, recepient, message):
        with smtplib.SMTP_SSL(self.MAIL_SERVER, self.PORT,
                              context=self.mail_context) as server:
            server.login(self.SENDER_MAIL, self.PASSWORD)
            server.sendmail(self.SENDER_MAIL, recepient, str(message))
