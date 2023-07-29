import React from 'react'
import Sidebar from '../components/AlumSidebar'
import CreateCommForm from '../components/CreateCommForm'

const CreateComm = () => {
  return (
    <div className='grid grid-cols-6'>
      <Sidebar className="col-span-1" />
      <div className='col-span-5 grid grid-cols-2 gap-4 py-5 px-10'>
        <CreateCommForm />
      </div>
    </div>
  )
}

export default CreateComm