import React from 'react'
import Sidebar from '../components/AlumSidebar'
import CommunityCard from '../components/CommunityCard'
import MessageCard from '../components/MessageCard'
import StudSidebar from '../components/StudSidebar'
import AlumSidebar from '../components/AlumSidebar'
import CommunityChat from '../components/CommunityChat'

const ChatPage = () => {
  const isStudent = localStorage.getItem("user") == "student"
  return (
      <div className='grid grid-cols-6'>
      {isStudent ? (<StudSidebar className="col-span-1" />
      ) : (
      <AlumSidebar className="col-span-1" />
      )}
        <div className='col-span-4 py-5'>
          <CommunityChat />
        </div>
        
      </div>
  )
}

export default ChatPage