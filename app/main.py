# app/main.py
from fastapi import FastAPI, Request
from app.api.router import api_router
from app.api.endpoints.public import router
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from app.utils.functions import manager
from fastapi.responses import RedirectResponse

app = FastAPI(
    title="StudyAllies | Get Homework Assignments Done",
    description="Get all the necessary assignment help from the application\
        or signup as a tutor and assist the students who post assignemts on\
            the platform. Earn at the comfort of your home",
    version="1.0.0",
    contact={
            "name": "Mouseinc Technologies",
            "url": "https://github.com/vicjuma",
            "email": "info@mouseinc.net"
        },
    license_info={
            "name": "mouseinctech"
        }
)

origins = []


app.mount("/static", StaticFiles(directory="app/static"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class NotAuthenticatedException(Exception):
    pass


manager.not_authenticated_exception = NotAuthenticatedException


@app.exception_handler(NotAuthenticatedException)
def auth_exception_handler(request: Request, exc: NotAuthenticatedException):
    return RedirectResponse(url='/')


app.include_router(api_router, prefix="/api")
app.include_router(router)
