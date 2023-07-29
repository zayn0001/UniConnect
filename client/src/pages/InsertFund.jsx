import React from 'react'
import Sidebar from '../components/StudSidebar'
import InsertFundForm from '../components/InsertFundForm'
const InsertFund = () => {
  return (
    <div className='grid grid-cols-5'>
      <Sidebar className="col-span-1" />
      <div className='col-span-4 py-5'>
        <InsertFundForm />
      </div>
    </div>
  )
}

export default InsertFund