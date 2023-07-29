import React from 'react'
import StudSidebar from '../components/StudSidebar'
import AlumSidebar from '../components/AlumSidebar'
import CommunityCard from '../components/CommunityCard'
import CommunityCreate from '../components/CommunityCreate'
import { getDatabase, set, get, update, ref } from "firebase/database"


const Communities = () => {
  const isStudent = localStorage.getItem("user") == "student"
  const [communities, setCommunities] = React.useState([])
  React.useEffect(() => {
    const db = getDatabase()
    const communityRef = ref(db, 'community');
    get(communityRef).then((snapshot) => {
      if (snapshot.exists()) {
        const communityData = snapshot.val();
        const dataArray = Object.entries(communityData);
        setCommunities(dataArray)
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
        <div className='col-span-5 grid grid-cols-2 gap-4 py-5' style={{width: "80vw"}}>
          <div className='col-span-2'>
            <CommunityCreate />
          </div>
          {communities && [...communities].map(([key, c]) => <CommunityCard community={c} />)}
        </div>
      </div>
  )
}

export default Communities