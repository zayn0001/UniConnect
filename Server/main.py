
import uvicorn
from fastapi import FastAPI
from backed.crowdfund import router as createfund

app = FastAPI()

app.include_router(createfund)

if __name__ == "__main__":
    uvicorn.run("main:app",port=8081,host='192.168.237.75',reload=True)
