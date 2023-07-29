import React from 'react'
import { getDatabase, set, ref } from "firebase/database";
import { useNavigate } from 'react-router-dom';

const CreateCommForm = () => {
    const [subject, setSubject] = React.useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const db = getDatabase()
        set(ref(db, 'community/' + subject), {
          subject: subject,
          admin: localStorage.getItem('username')
        });
        navigate('/communities')
    }
  return (
    <div>
        <h1 className="text-center text-xl font-bold">Create a community</h1>
<form>

  <div class="mb-6">
    <label name="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Subject</label>
    <input onChange={(e) => setSubject(e.target.value)} type="text" name="title" id="title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter subject...' required />
  </div>
  <button onClick={handleSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Create</button>
</form>

    </div>
  )
}

export default CreateCommForm