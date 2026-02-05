from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import SessionLocal
import models

app = FastAPI(title="Grippi Campaign API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://grippi-dashboard-blush.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root():
    return {"message": "Grippi Campaign API is running"}

@app.get("/campaigns")
def get_campaigns(db: Session = Depends(get_db)):
    campaigns = db.query(models.Campaign).all()

    return [
        {
            "id": c.id,
            "name": c.name,
            "status": c.status,
            "clicks": c.clicks,
            "cost": c.cost,
            "impressions": c.impressions,
        }
        for c in campaigns
    ]
