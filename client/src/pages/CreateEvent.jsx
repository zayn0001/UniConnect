import React from 'react'
import Sidebar from '../components/StudSidebar'
import CreateEventForm from '../components/CreateEventForm'
const InsertFund = () => {
  return (
    <div className='grid grid-cols-5'>
      <Sidebar className="col-span-1" />
      <div className='col-span-4 py-5'>
        <CreateEventForm />
      </div>
    </div>
  )
}

export default InsertFund