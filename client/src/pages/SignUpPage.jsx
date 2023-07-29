import React from 'react';
import RegisterStudent from '../firebase-connect';
import { useNavigate } from 'react-router';
import SignUpForm from '../components/SignUpForm'

function SignUpPage() {

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault()
    RegisterStudent(event.currentTarget.elements)
    navigate("/login")
  }

  return (
    <SignUpForm handleSubmit={handleSubmit}/>
);
}
export default SignUpPage;