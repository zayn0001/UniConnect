import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getDatabase, ref, get } from "@firebase/database";
import logo from '../assets/png/logo-black.png'

const LoginPage = () => {
    const navigate = useNavigate()
    function loginStudent(event){
        const db = getDatabase();
        event.preventDefault()
        var data = event.currentTarget.elements
        var leadsRef = ref(db, 'colleges');
        get(leadsRef).then((snapshot)=>{
            if(snapshot.exists()){
                let colleges = snapshot.val()

                Object.values(colleges).forEach(element => {
                    if(element.students){
                        Object.values(element.students).forEach(elem=>{
                            console.log(data.password.value, elem.password)
                            console.log(data.username.value,elem.username)
                            if (elem.username==data.username.value && elem.password == data.password.value){
                                console.log("piopouoqiwyeuqwe")
                                localStorage.setItem('user', "student")
                                localStorage.setItem('username', elem.username)
                                navigate("/dashboard")
                            } 
                        })
                    }
                    
                    if(element.alumni){
                        Object.values(element.alumni).forEach(elem=>{
                            console.log(data.password.value, elem.password)
                            console.log(data.username.value==elem.username)
                            if (elem.username==data.username.value && elem.password == data.password.value){
                                console.log("piopouoqiwyeuqwe")
                                localStorage.setItem('user', "alumini")
                                localStorage.setItem('username', elem.username)
                                navigate("/dashboard")
                            } 
                        })
                    }
                    
                })
            }
        })
    }
  return (
    <>
    <div className="bg-white dark:bg-black">
    <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3">
            <div className="flex items-center h-full px-20 bg-gradient-to-tr from-purple-700 via-slate-600 to-black bg-opacity-40">
                <div>
                    <h2 className="max-w-2xl mb-10 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-grey">UniConnect</h2>

                    <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-300">
                    From funding your project to organize a hackathon is made easy with UniConnect by your side. 
                    </p>
                    <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-300">
                     Our platform offers numerous opportunities, from internships to jobs, benefiting both students and alumni. 
                    </p>
                    <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-300">
                    Uniting colleges, we create a vibrant community where students and alumni stay connected, evoking that sense of being back in school.
                    </p>
                    <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-300">
                    Discover boundless possibilities with UniConnect and build a brighter future together. 
                    </p>
                </div>
            </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
                <div className="text-center">
                    <div className="flex justify-center mx-auto">
                        <img className="h-48 w-auto" src={logo} alt=""/>
                    </div>

                    <p className="mt-3 text-black-500 dark:text-black-300">Sign in to access your account</p>
                </div>

                <div className="mt-8">
                    <form onSubmit={loginStudent}>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm text-black-600 dark:text-black-200">Username</label>
                            <input type="text" name="username" id="email" placeholder="Username" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-black-600 dark:text-black-200">Password</label>
                                <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                            </div>

                            <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign in
                            </button>
                        </div>

                    </form>

                    <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to='/signup' href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
                </div>
            </div>
        </div>
    </div>
</div></>
  )
}
export default LoginPage