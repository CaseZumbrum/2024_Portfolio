from fastapi import FastAPI
from motor import motor_asyncio
from Portfolio.config import config
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import pathlib
from typing import Optional

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
client = motor_asyncio.AsyncIOMotorClient(config.MONGO_URL)  # type:ignore
db = client.get_database("content")
project_collection = db.get_collection("projects")
work_collection = db.get_collection("work")


class WorkModel(BaseModel):
    company: str
    time: str
    description: str
    image: str


class WorkList(BaseModel):
    jobs: list[WorkModel]


class ProjectModel(BaseModel):
    body: str
    title: str
    img: str
    time: str
    link: Optional[str] = None


class ProjectList(BaseModel):
    projects: list[ProjectModel]


@app.get("/projects")
async def get_projects():
    return ProjectList(
        projects=await project_collection.find().sort("time", -1).to_list(100)
    ).projects


@app.get("/work")
async def get_work():
    return WorkList(
        jobs=await work_collection.find().sort("time", -1).to_list(100)
    ).jobs


app.mount(
    "/project_pages",
    StaticFiles(
        directory=pathlib.Path(__file__)
        .parent.resolve()
        .joinpath("../../../projects/"),
    ),
    name="project_pages",
)

app.mount(
    "/",
    StaticFiles(
        directory=pathlib.Path(__file__)
        .parent.resolve()
        .joinpath("../../../client/dist"),
        html=True,
    ),
    name="site",
)
