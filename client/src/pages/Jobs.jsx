import React, { useEffect } from 'react'
import StudSidebar from '../components/StudSidebar'
import AlumSidebar from '../components/AlumSidebar'
import { getDatabase, set, get, update, ref } from "firebase/database"
import EventsCard from '../components/EventCard'
import EventCreate from '../components/EventCreate'
import JobCreate from '../components/JobCreate'
import JobCard from "../components/JobCard"

const Jobs = () => {


    const isStudent = localStorage.getItem("user") == "student"
  const [events, setEvents] = React.useState([])
  React.useEffect(() => {
    const db = getDatabase()
    const eventRef = ref(db, 'jobs');
    get(eventRef).then((snapshot) => {
      if (snapshot.exists()) {
        const eventData = snapshot.val();
        const dataArray = Object.entries(eventData);
        setEvents(dataArray)
        // console.log(dataArray)
      }
    })

  }, [])

  return (
      <div className='grid grid-cols-6'>
      {isStudent ? (<StudSidebar className="col-span-1" />) : (<AlumSidebar className="col-span-1" />)}
        <div style={{width: "80vw"}}>
            <div className='col-span-2'>
            {!isStudent ? (<JobCreate/>): <></>}
            </div>
            <div className='col-span-5 grid grid-cols-2 gap-4 py-5'>

            {events && [...events].map(([key, c]) => <JobCard events={c} />)}
            
            </div>
      </div>

      </div>
  )
}

export default Jobs