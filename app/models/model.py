from __future__ import annotations
from sqlalchemy import (
    Column,
    String,
    ForeignKey,
    Integer,
    Boolean,
    Text,
    Table,
    DateTime,
    func,
    Float
)
from sqlalchemy.orm import relationship
from app.database import Base
import datetime


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    username = Column(String(250), nullable=False, unique=True)
    email = Column(String(250), nullable=False, unique=True)
    password = Column(String(250), default='userpass')
    phone = Column(String(250), unique=True)
    about = Column(Text)
    role = Column(String(250), default='Student')
    created_at = Column(DateTime, default=func.now())
    modified_at = Column(DateTime, default=func.now(), onupdate=func.now())
    last_seen = Column(DateTime, default=func.now())
    time_zone = Column(
        String(250),
        default=datetime.datetime.now().astimezone().tzinfo)
    profile_pic = Column(String(200))
    is_admin = Column(Boolean, default=False)
    is_subscribed_to_newsletter = Column(Boolean, default=False)
    is_subscribed_private_messages = Column(Boolean, default=False)
    is_subscribed_updates_recommendations = Column(Boolean, default=False)
    is_payment_verified = Column(Boolean, default=False)

    tutor = relationship("Tutor", uselist=False, back_populates="user")
    transactions = relationship("Transaction", back_populates="student")
    # tasks = relationship('Task', back_populates='student')

    def __init__(self, *args, **kwargs) -> None:
        super(User, self).__init__(*args, **kwargs)

    def __repr__(self):
        return f'{self.__class__.__qualname__}(\
            username={self.username!r}, email={self.email!r}, \
                phone={self.phone!r}, password={self.password!r}, \
                    role={self.role!r})'

    def to_json(self):
        return {
            "id": self.id,
            'username': self.username,
            'email': self.email,
            'password': self.password,
            'phone': self.phone,
            'about': self.about,
            'role': self.role,
            'time_zone': self.time_zone,
            "profile_pic": self.profile_pic,
            "is_admin": self.is_admin,
            "created_at": self.created_at,
            "modified_at": self.modified_at,
            "last_seen": self.last_seen,
            'is_subscribed_to_newsletter': self.is_subscribed_to_newsletter,
            'is_subscribed_private_messages':
                self.is_subscribed_private_messages,
            'is_subscribed_updates_recommendations':
                self.is_subscribed_updates_recommendations
        }


tutor_expertise = Table(
    'tutor_expertise',
    Base.metadata,
    Column('tutor_id', Integer, ForeignKey('tutors.id')),
    Column('expertise_id', Integer, ForeignKey('expertises.id')),
)


class Tutor(Base):
    __tablename__ = "tutors"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)

    user = relationship("User", back_populates="tutor")
    documents = relationship('Document', back_populates='tutor')
    expertises = relationship(
        "Expertise", secondary=tutor_expertise, back_populates="tutors")

    answers = relationship('TaskAnswer', back_populates='tutor')
    tutorial_answers = relationship('TutorialAnswer', back_populates='tutor')
    tutorials = relationship('Tutorial', back_populates='tutor')


class Expertise(Base):
    __tablename__ = "expertises"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(250))

    tutors = relationship(
        "Tutor", secondary=tutor_expertise, back_populates="expertises")


class Document(Base):
    __tablename__ = 'documents'

    id = Column(Integer, primary_key=True, index=True)
    tutor_id = Column(Integer, ForeignKey('tutors.id'))
    file_name = Column(String(100))
    document_type = Column(String(100))
    document_level = Column(String(100))
    created_at = Column(DateTime, default=func.now())
    modified_at = Column(DateTime, default=func.now(), onupdate=func.now())

    tutor = relationship('Tutor', back_populates='documents')


'''Task Model'''


class Task(Base):
    __tablename__ = 'tasks'

    id = Column(Integer, primary_key=True)
    title = Column(String(250), nullable=False)
    timeline = Column(DateTime, nullable=False)
    amount = Column(Integer, nullable=False)
    content = Column(Text)
    status = Column(String(250), default="Unclaimed")
    receive_emails = Column(Boolean, default=False)
    student_id = Column(Integer, ForeignKey('users.id'))
    tutor_id = Column(Integer, ForeignKey('tutors.id'))
    subject_id = Column(Integer, ForeignKey('subjects.id'))
    created_at = Column(DateTime, default=func.now())
    modified_at = Column(DateTime, default=func.now(), onupdate=func.now())

    answers = relationship('TaskAnswer', back_populates='task')
    bids = relationship('Bid', back_populates='task')
    tutor = relationship('Tutor', backref='tasks')
    subject = relationship('Subject', back_populates='tasks')
    files = relationship('TaskFile', back_populates='task')


'''Subjects Model'''


class Subject(Base):
    __tablename__ = 'subjects'

    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)

    tasks = relationship('Task', back_populates='subject')
    tutorial = relationship('Tutorial', back_populates='tut_subject')


'''Task attachment model'''


class TaskFile(Base):
    __tablename__ = 'files'

    id = Column(Integer, primary_key=True)
    filename = Column(String(250))
    task_id = Column(Integer, ForeignKey('tasks.id'))

    task = relationship('Task', back_populates='files')


class Bid(Base):
    __tablename__ = 'bids'

    id = Column(Integer, primary_key=True)
    message = Column(Text)
    task_id = Column(Integer, ForeignKey('tasks.id'))
    bidder_id = Column(Integer, ForeignKey('tutors.id'))
    bid_time = Column(DateTime, default=func.now())
    bid_amount = Column(Integer)
    bid_status = Column(String(250))

    task = relationship('Task', back_populates='bids')
    bidder = relationship('Tutor', backref='bids')
    transactions = relationship("Transaction", back_populates="bid")
    chats = relationship('Chat', back_populates='bid')


class TaskAnswer(Base):
    __tablename__ = 'task_answers'

    id = Column(Integer, primary_key=True)
    text = Column(String(250), nullable=False)
    task_id = Column(Integer, ForeignKey('tasks.id'))
    tutor_id = Column(Integer, ForeignKey('tutors.id'))

    task = relationship('Task', back_populates='answers')
    tutor = relationship('Tutor', back_populates='answers')


class Transaction(Base):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True)
    amount = Column(Float, nullable=False)
    student_id = Column(Integer, ForeignKey('users.id'))
    payment_date = Column(DateTime, default=func.now())
    order_id = Column(Integer, ForeignKey('bids.id'))

    student = relationship("User", back_populates="transactions")
    bid = relationship("Bid", back_populates="transactions")


class Chat(Base):
    __tablename__ = 'chats'

    id = Column(Integer, primary_key=True)
    sender_id = Column(Integer, ForeignKey('users.id'))
    recipient_id = Column(Integer, ForeignKey('users.id'))
    message = Column(Text)
    bid_id = Column(Integer, ForeignKey('bids.id'))
    sent_at = Column(DateTime, default=func.now())

    sender = relationship('User', foreign_keys=[sender_id])
    recipient = relationship('User', foreign_keys=[recipient_id])
    bid = relationship('Bid', back_populates='chats')


class Tutorial(Base):
    __tablename__ = 'tutorials'

    id = Column(Integer, primary_key=True)
    title = Column(String(250), nullable=False)
    amount = Column(Integer, nullable=False)
    content = Column(Text)
    student_id = Column(Integer, ForeignKey('users.id'))
    tutor_id = Column(Integer, ForeignKey('tutors.id'))
    subject_id = Column(Integer, ForeignKey('subjects.id'))
    created_at = Column(DateTime, default=func.now())
    modified_at = Column(DateTime, default=func.now(), onupdate=func.now())

    tutorial_answers = relationship(
        'TutorialAnswer', back_populates='tutorial')
    tutor = relationship('Tutor', back_populates='tutorials')
    tut_subject = relationship('Subject', back_populates='tutorial')
    files = relationship('TutorialFile', back_populates='tutorial')


class TutorialAnswer(Base):
    __tablename__ = 'tutorial_answers'

    id = Column(Integer, primary_key=True)
    text = Column(String(250), nullable=False)
    tutor_id = Column(Integer, ForeignKey('tutors.id'))
    tutorial_id = Column(Integer, ForeignKey('tutorials.id'))

    tutorial = relationship('Tutorial', back_populates='tutorial_answers')
    tutor = relationship('Tutor', back_populates='tutorial_answers')


class TutorialFile(Base):
    __tablename__ = 'tutorial_files'

    id = Column(Integer, primary_key=True)
    filename = Column(String(250))
    tutorial_id = Column(Integer, ForeignKey('tutorials.id'))

    tutorial = relationship('Tutorial', back_populates='files')
