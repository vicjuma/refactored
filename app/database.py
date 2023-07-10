from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.config import settings
from sqlalchemy.ext.declarative import declarative_base


engine = create_engine(settings.database_url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


Base = declarative_base()


def create_tables():
    Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    return db
# from app.database import get_db
# @router.get("/users/{user_id}")
# def get_user(user_id: int, db: Session = Depends(get_db)):
#     # Access the database using the 'db' session
#     user = db.query(User).filter(User.id == user_id).first()
#     return user
