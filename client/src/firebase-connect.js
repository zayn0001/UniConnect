import { getDatabase, set, ref } from "firebase/database";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtYHgVxdyv9a9Lqq2xq-p8iK7JQ3SXQ7I",
  authDomain: "uniconnnect.firebaseapp.com",
  databaseURL: "https://uniconnnect-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uniconnnect",
  storageBucket: "uniconnnect.appspot.com",
  messagingSenderId: "503782874225",
  appId: "1:503782874225:web:f37b7939d1cff27c618fd0",
  measurementId: "G-3LQPJ77VK6"
};

export default function RegisterStudent(data) {
  const db = getDatabase();
  set(ref(db, 'colleges/' + data.university.value +"/students/"+ data.username.value), {
    username:data.username.value,
    name:data.name.value, 
    studentId:data.studentId.value, 
    university:data.university.value, 
    profileSummary:data.profileSummary.value, 
    department:data.department.value, 
    batchYear:data.batchYear.value, 
    stackInterested:data.stackInterested.value, 
    cgpa:data.cgpa.value, 
    achievements:data.achievements.value, 
    email:data.email.value, 
    password:data.password.value
  });
  localStorage.setItem('username', data.username.value)
}


  
const app = initializeApp(firebaseConfig);