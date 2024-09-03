from fastapi import FastAPI
from motor import motor_asyncio
from Portfolio.config import config
from pydantic import BaseModel

app = FastAPI()
client = motor_asyncio.AsyncIOMotorClient(config.MONGO_URL)  # type:ignore
db = client.get_database("content")
project_collection = db.get_collection("posts")


class ProjectModel(BaseModel):
    body: str
    title: str
    img: str
    time: str


class ProjectList(BaseModel):
    projects: list[ProjectModel]


@app.get("/")
async def get_root():
    return ProjectList(projects=await project_collection.find().to_list(100))
