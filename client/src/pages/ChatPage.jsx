import React from 'react'
import Sidebar from '../components/AlumSidebar'
import CommunityCard from '../components/CommunityCard'
import MessageCard from '../components/MessageCard'
import StudSidebar from '../components/StudSidebar'
import AlumSidebar from '../components/AlumSidebar'
import { getDatabase, set, get, update, ref } from "firebase/database"

const ChatPage = () => {
  const isStudent = localStorage.getItem("user") == "student"
  const [volunteers, setVol] = React.useState([])
  React.useEffect(() => {
    const db = getDatabase()
    const eventsRef = ref(db, 'events');
    get(eventsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const eventsData = snapshot.val();
        const dataArray = Object.entries(eventsData);
        const filteredData = dataArray.map(d => {
          const f = d.filter(n => n.incharge == localStorage.getItem('username'))
          if(f[0]){
            return f[0].volunteers
          }
        })
        console.log(filteredData)
        setVol(filteredData)
        // console.log(dataArray)
      }
    })
  }, [])
  return (
      <div className='grid grid-cols-6'>
      {isStudent ? (<StudSidebar className="col-span-1" />
      ) : (
      <AlumSidebar className="col-span-1" />
      )}
        <div className='ml-5 col-span-4 py-5'>
          {volunteers && volunteers.map(v => <MessageCard volunteer = {v}/>)}
        </div>
        
      </div>
  )
}

export default ChatPage