import React from 'react'
import { Link } from 'react-router-dom'

const EventCreate = () => {
  return (<>
    <div className='px-5 py-5'>
        <Link to='/student/newevent' className='bg-blue-500 text-white px-3 py-3 rounded'>Create</Link>
    </div>
    </>
  )
}

export default EventCreate