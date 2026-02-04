from sqlalchemy import Column, Integer, String, Float, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Campaign(Base):
    __tablename__ = "campaigns"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    status = Column(String, nullable=False)
    clicks = Column(Integer, nullable=False)
    cost = Column(Float, nullable=False)
    impressions = Column(Integer, nullable=False)
    created_at = Column(TIMESTAMP)
