import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDatabase, set, get, update, ref } from "firebase/database"

const EventsCard = ({events}) => {
  const navigate = useNavigate()
  const [volunteers, setVol] = React.useState([])
  React.useEffect(() => {
    setVol(events.volunteers)
  }, [])
  const handleJoin = (e) =>{

    e.preventDefault()
        const db = getDatabase()
        const eventsRef = ref(db, 'events/' + events.title);
        get(eventsRef).then((snapshot) => {
          if (snapshot.exists()) {
            const eventsData = snapshot.val();
            let currentMembers = eventsData.volunteers || []; 

            currentMembers.push(localStorage.getItem('username'));

            update(eventsRef, {
              volunteers: currentMembers,
            });
            setVol(currentMembers)
          }
        })
        const user = localStorage.getItem("user") == "student" ? "student" : "alumini"
  }



  
  
  return (
    <>
    {events.title &&<div className='w-[100%] mt-5 ml-5'>
        
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-[#EAEAEA] dark:bg-[#EAEAEA] dark:hover:bg-[#CECECE]">
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">{events.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">{events.description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">Judges Required: {events.judges}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">Mentors Required: {events.mentors}</p>
        <div className='flex'>
            {/* <input type="number" name="" placeholder='Amount to fund...' className='px-3' id="" /> */}
            {(volunteers && volunteers.includes(localStorage.getItem('username'))) ? <button className='text-white px-4 py-2 rounded bg-green-800 mr-5'>Volunteered</button> : <button onClick={handleJoin} className='bg-green-500 text-white px-4 py-2 rounded'>Volunteer</button>}
            
        </div>
    </div>
</a>
    </div>}</>
  )
}

export default EventsCard