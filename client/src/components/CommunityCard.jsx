import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getDatabase, set, get, update, ref } from "firebase/database"
import { Link } from 'react-router-dom'

const CommunityCard = ({community}) => {
  const navigate = useNavigate()
  React.useEffect(() => {
    console.log(community)
  }, [])
  const handleJoin = (e) =>{
    e.preventDefault()
        const db = getDatabase()
        const communityRef = ref(db, 'community/' + community.subject);
        get(communityRef).then((snapshot) => {
          if (snapshot.exists()) {
            const communityData = snapshot.val();
            let currentMembers = communityData.members || []; 

            currentMembers.push(localStorage.getItem('username'));

            update(communityRef, {
              members: currentMembers,
            });
          }
        })
        navigate(`/community/${community.subject}`)
  }
  return (
    <>
    {community.subject &&<div className='w-[100%] mt-5 ml-5'>
        
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-[#EAEAEA] dark:bg-[#EAEAEA] dark:hover:bg-[#CECECE]">
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">{community.subject}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">Lorem Ipsum Lorem Ipsu Lorem Ipsu Lorem Ipsu Lorem IpsuLorem Ipsu Lorem Ipsu Lorem Ipsu Lorem Ipsu Lorem Ipsu</p>
        <div className='flex'>
            {/* <input type="number" name="" placeholder='Amount to fund...' className='px-3' id="" /> */}
            {(community.members && community.members.includes(localStorage.getItem('username'))) ? <div className='flex'><button className='text-white px-4 py-2 rounded bg-green-800 mr-5'>Joined</button><Link to={`/community/${community.subject}`} className='text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-500'>View Chats</Link></div> : <button onClick={handleJoin} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800'>Join</button>}
        </div>
    </div>
</a>

    </div>}</>
  )
}

export default CommunityCard