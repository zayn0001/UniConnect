import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getDatabase, set, get, update, ref } from "firebase/database"

const EventsCard = ({events}) => {
  const navigate = useNavigate()
  const [volunteers, setVol] = React.useState([])
  const [username, setUsername] = React.useState()
  React.useEffect(() => {
    setVol(events.volunteers)
    setUsername(localStorage.getItem("username"))
  }, [])
  const handleJoin = (e) =>{

    e.preventDefault()
        const db = getDatabase()
        const eventsRef = ref(db, 'jobs/' + events.title);
        get(eventsRef).then((snapshot) => {
          if (snapshot.exists()) {
            const eventsData = snapshot.val();
            let currentMembers = eventsData.applications || []; 

            currentMembers.push(localStorage.getItem('username'));

            update(eventsRef, {
              applications: currentMembers,
            });
            setVol(currentMembers)
          }
        })
        const user = localStorage.getItem("user") == "student" ? "student" : "alumini"
  }



  
  
  return (
    <>
    {events.title &&<div className='w-[100%] mt-5 ml-5'>
        
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-[#EAEAEA] dark:bg-[#EAEAEA] dark:hover:bg-[#CECECE]" >
    <div className="flex flex-col justify-between p-4 leading-normal" style={{width:"100%"}}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">{events.title}</h5>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-800">Offered By: {events.alumini}</p>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-800">Type: {events.type}</p>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-800">Designation: {events.designation}</p>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-800">Period: {events.period}</p>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-800">Salary: {events.salary}</p>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-800">Description: {events.description}</p>
        <div className='flex' style={{justifyContent: "space-between",width: "100%"}}>
            {/* <input type="number" name="" placeholder='Amount to fund...' className='px-3' id="" /> */}
            {
              username!=events.alumini ? ((volunteers && volunteers.includes(localStorage.getItem('username'))) ? <button className='text-white px-4 py-2 rounded bg-green-800 mr-5'>Applied</button> : <button onClick={handleJoin} className='bg-green-500 text-white px-4 py-2 rounded'>Apply</button>):<></>
            }
            
            {username==events.alumini ? <button onClick={()=>navigate("/alumini/recommendations")} className='text-white px-4 py-2 rounded bg-green-800 mr-5'>Recommend</button>: <></>}
        </div>
    </div>
</a>
    </div>}</>
  )
}

export default EventsCard