import React from 'react'
import AlumSidebar from '../components/AlumSidebar'
import StudSidebar from '../components/StudSidebar'
import OneChatBox from '../components/OneChatBox'

const OneChat = () => {
  const isStudent = localStorage.getItem("user") == "student"
  return (
    <div className='grid grid-cols-6'>
      {isStudent ? (<StudSidebar className="col-span-1" />
      ) : (
      <AlumSidebar className="col-span-1" />
      )}
        <div className='col-span-4 py-5'>
          <OneChatBox />
        </div>
        
      </div>
  )
}

export default OneChat