from fastapi import APIRouter, status, Request, UploadFile, \
    Depends, File
from sqlalchemy import func
from typing import List
from app.utils.functions import manager, get_db
import datetime
import os
import re
import shutil
from contextlib import closing
from app.services.task import add_subjects
from app.models.model import Subject, Task, TaskFile
from app.utils.functions import load_user, get_templates
from fastapi.responses import RedirectResponse


router = APIRouter()
templates = get_templates()


@router.post("/create/tasks",
             status_code=status.HTTP_201_CREATED)
async def createTask(request: Request,
                     files: List[UploadFile] = File(...),
                     user=Depends(manager)):
    form_data = await request.form()
    content_data = form_data.get("content_data")
    subject = form_data.get("subject")
    timeline_html = form_data.get("timeline")
    timeline = datetime.datetime.strptime(timeline_html, "%Y-%m-%dT%H:%M")
    amount = form_data.get("amount")
    notification = form_data.get("notification")
    is_checked = True if notification == "on" else False
    title_stripped = re.sub(r'<[^>]+>', '', content_data)[:30]
    if subject is None:
        subject = "general"
    with closing(get_db()) as db:
        subject_is = db.query(Subject).filter(
            func.lower(Subject.name) == subject).first()
        new_task = Task(
            title=title_stripped,
            timeline=timeline,
            amount=amount,
            content=content_data,
            receive_emails=is_checked,
            student_id=user.id,
            subject_id=subject_is.id)
        db.add(new_task)
        db.commit()
        for file in files:
            new_file = TaskFile(task_id=new_task.id, filename=file.filename)
            db.add(new_file)
            db.commit()
            static_dir = os.path.join(
                f"{os.getcwd()}/app", "static/HWAttachments")
            destination = os.path.join(static_dir, file.filename)
            print(static_dir)
            print(destination)
            with open(f"{destination}", "wb") as f:
                shutil.copyfileobj(file.file, f)

        user = load_user(user.username) or load_user(user.email)
        tasks = None
        if user:
            tasks = db.query(Task).filter(Task.student_id == user.id).all()
            for task in tasks:
                print(task)
        return RedirectResponse("/api/users/my/questions",
                                status_code=status.HTTP_302_FOUND)


@router.get("/create_subjects")
async def register():
    # Logic for user registration
    return add_subjects()
