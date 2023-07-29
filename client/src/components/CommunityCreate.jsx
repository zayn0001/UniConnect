import React from 'react'
import { Link } from 'react-router-dom'
const CommunityCreate = () => {
  return (
    <div className='px-5 py-5'>
        <Link to='/createComm' className='bg-blue-500 text-white px-3 py-3 rounded'>Create</Link>
    </div>
  )
}

export default CommunityCreate