import React from 'react'
import { getDatabase, ref, set } from '@firebase/database';
import { useNavigate } from 'react-router';

const InsertFundForm = () => {
  const navigate = useNavigate()
  function createEvent(event){
    event.preventDefault()
    const db = getDatabase();
    let data = event.currentTarget.elements
  set(ref(db, 'events/' + data.title.value), {
    title: data.title.value,
    description: data.description.value,
    budget: parseFloat(data.budget.value),
    mentors: parseInt(data.mentors.value),
    judges: parseInt(data.judges.value),
    incharge: localStorage.getItem("username")
  });
  set(ref(db, 'funds/' + data.title.value), {
    amount: parseFloat(data.budget.value),
    desc: data.description.value,
    pool: 0,
    username: localStorage.getItem("username"),
    title: data.title.value
  });
  navigate("/alumini/events")
}
  return (
    <div>
        <h1 className="text-center text-xl font-bold">Upload Event Details & Requirements</h1>
<form onSubmit={createEvent}>

  <div class="mb-6">
    <label name="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Title</label>
    <input type="text" name="title" id="title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter title...' required />
  </div>
  <div class="mb-6">
    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Requirements</label>
    <textarea id="description" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter requirements...' required />
  </div>
  <div class="mb-6">
    <label for="budget" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Amount Required</label>
    <input type="number" id="budget" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Amount..' required />
  </div>
  <div class="mb-6">
    <label for="mentors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Mentors Required</label>
    <input type="number" id="mentors" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Amount..' required />
  </div>
  <div class="mb-6">
    <label for="judges" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Judges Required</label>
    <input type="number" id="judges" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Amount..' required />
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-[#EAEAEA] dark:border-[#EAEAEA] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Upload</button>
</form>

    </div>
  )
}

export default InsertFundForm