from fastapi.security import OAuth2PasswordRequestForm
from app.services.auth import loginUser
from fastapi import Depends, APIRouter


router = APIRouter()


@router.post("/login")
async def loginStudent(data: OAuth2PasswordRequestForm = Depends()):
    return loginUser(data)


@router.post("/register")
async def register():
    # Logic for user registration
    return {"message": "User registration endpoint"}
