import React from 'react'
import FundCard from '../components/FundCard'
import { getDatabase, set, get, update, ref } from "firebase/database"
import StudSidebar from '../components/StudSidebar'
import AlumSidebar from '../components/AlumSidebar'
const FundPage = () => {
  const isStudent = localStorage.getItem("user") == "student"
  const [funds, setFunds] = React.useState([])
  React.useEffect(() => {
    const db = getDatabase()
    const fundsRef = ref(db, 'funds');
    get(fundsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const fundsData = snapshot.val();
        const dataArray = Object.entries(fundsData);
        setFunds(dataArray)
        console.log(dataArray)
      }
    })
  }, [])
  return (
    <div className='grid grid-cols-5'>
      {isStudent ? (<StudSidebar className="col-span-1" />
      ) : (
      <AlumSidebar className="col-span-1" />
      )}
      <div className='col-span-4 grid grid-cols-2 gap-4 py-5'>
        {funds && funds.map(([key, f]) => <FundCard fund={f} /> )}
      </div>
    </div>
  )
}

export default FundPage