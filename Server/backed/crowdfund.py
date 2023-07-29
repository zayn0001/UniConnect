
import razorpay
from fastapi import APIRouter, File, UploadFile, Form
from firebase_admin import credentials, initialize_app, db

router = APIRouter()

# Replace these with your Razorpay test API credentials
RAZORPAY_KEY_ID = "rzp_test_7no5vvd5xFAi9x"
RAZORPAY_KEY_SECRET = "vcAt4BGAgUVLrpBHcU41oKmB"


import os

file_path_str = "backed/uniconnnect-firebase-adminsdk-eiw1e-b4c5f98ff4.json"
file_path = os.path.abspath(file_path_str)

# Initialize Firebase Admin SDK
cred = credentials.Certificate(file_path)
initialize_app(cred, {'databaseURL': "https://uniconnnect-default-rtdb.asia-southeast1.firebasedatabase.app"})

root_ref = db.reference()

@router.post("/createfund/")
async def create_project(
    project_name: str = Form(...),
    target_value: float = Form(...),
    due_date: str = Form(...),
    description: str = Form(...)
):
    new_project = {
        "name": project_name,
        "target_value": target_value,
        "due_date": due_date,
        "description": description,
        "current_fund": 0.0
    }
    

    return {"status": new_project, "message": "Error creating Razorpay order."}

@router.post("/contribute/{project_id}/")
async def contribute_to_project(
    project_id: str,
    amount: float = Form(...),
):
    # Fetch the existing project details from Firebase
    project = root_ref.child("projects").child(project_id).get()
    if not project:
        return {"status": "error", "message": "Project not found."}

    current_fund = project.val().get("current_fund", 0.0)
    # Increment the current_fund by the contributed amount
    current_fund += amount

    # Update the project details in Firebase
    root_ref.child("projects").child(project_id).update({"current_fund": current_fund})

    return {"status": "success", "message": "Contribution successful."}
