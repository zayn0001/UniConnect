import React from 'react'
import { Link } from 'react-router-dom'
const MessageCard = ({volunteer}) => {
  return (
    <>
    {volunteer && volunteer.map(v => <div className='bg-[#EAEAEA] px-5 py-7 rounded mt-10 hover:bg-[#CECECE] cursor-pointer'>
        <h1 className='text-lg font-semibold'>{v}</h1>
        <p className='text-slate-600'>SWE Engineer, Google, SF</p>
        <div className='flex mt-5'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded mr-10'>View Profile</button>
          <Link to={`/messages/${localStorage.getItem('username')}/${v}`} className='bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded'>Chat</Link>
        </div>
    </div>)}
    </>
  )
}

export default MessageCard