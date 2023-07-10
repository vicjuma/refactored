# app/api/router.py
from fastapi import APIRouter
from app.api.endpoints import user, task, auth

api_router = APIRouter()

api_router.include_router(user.router, prefix="/users", tags=["Users"])
api_router.include_router(task.router, prefix="/tasks", tags=["Tasks"])
api_router.include_router(
    auth.router, prefix="/auth", tags=["Authentication"])
