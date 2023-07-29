import React from 'react'
import AlumSideBar from '../components/AlumSidebar'
import CreateJobForm from '../components/CreateJobForm'
const CreateJob = () => {
  return (
    <div className='grid grid-cols-5'>
      <AlumSideBar className="col-span-1" />
      <div className='col-span-4 py-5'>
        <CreateJobForm />
      </div>
    </div>
  )
}

export default CreateJob