import React from 'react'
import { getDatabase, set, ref } from "firebase/database";
import { useNavigate } from 'react-router-dom';

const InsertFundForm = () => {
  const [title, setTitle] = React.useState('')
  const [desc, setDesc] = React.useState('')
  const [amount, setAmount] = React.useState(0)

  const navigate = useNavigate()
  const handleUpload = (e) =>{
    e.preventDefault()
    const db = getDatabase()
    set(ref(db, 'funds/' + title.replace(/\s/g, '').toLowerCase() +"/"), {
      title: title,
      desc: desc,
      amount: amount,
      username: localStorage.getItem('username'),
      pool: 0
    });
    navigate('/student/home')
  }
  return (
    <div>
        <h1 className="text-center text-xl font-bold">Upload Funding Request</h1>
<form>

  <div className="mb-6">
    <label name="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Title</label>
    <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter title...' required />
  </div>
  <div className="mb-6">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Description</label>
    <textarea onChange={(e) => setDesc(e.target.value)} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter description...' required />
  </div>
  <div className="mb-6">
    <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Amount Required</label>
    <input onChange={(e) => setAmount(e.target.value)} type="number" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Amount..' required />
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Upload</button>
</form>

    </div>
  )
}

export default InsertFundForm