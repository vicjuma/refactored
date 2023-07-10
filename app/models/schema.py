from pydantic import BaseModel, EmailStr
from dataclasses import dataclass
from typing import Optional
import datetime
from fastapi import Form


class UserSchema(BaseModel):
    username: str
    email: EmailStr
    password: Optional[str]
    phone: Optional[str]
    about: Optional[str]
    role: Optional[str]
    created_at: Optional[datetime.datetime]
    modified_at: Optional[datetime.datetime]
    last_seen: Optional[datetime.datetime]
    time_zone: Optional[str]
    profile_pic: Optional[str]
    is_admin: Optional[bool]
    is_subscribed_to_newsletter: Optional[bool]
    is_subscribed_private_messages: Optional[bool]
    is_subscribed_updates_recommendations: Optional[bool]

    class Config:
        orm_mode = True


class TaskSchema(BaseModel):
    title: Optional[str]
    timeline: datetime.datetime
    amount: int
    receive_emails: bool
    student_id: Optional[int]
    tutor_id: Optional[int]
    subject_id: Optional[int]


@dataclass
class ChatSchema(BaseModel):
    sender_id: Optional[int]
    recipient_id: Optional[int]
    message: str = Form(...)
    bid_id: Optional[int]


class BidSchema(BaseModel):
    message: str = Form(...)
    task_id: Optional[int]
    bidder_id: Optional[int]
    bid_amount: int = Form(...)
