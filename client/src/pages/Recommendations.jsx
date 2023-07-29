import React from 'react'
import StudSidebar from '../components/StudSidebar'
import AlumSidebar from '../components/AlumSidebar'
import {ref, get, getDatabase} from "firebase/database";

const Recommendations = () => {
  const isStudent = localStorage.getItem("user") == "student"

  const ACHIEVEMENTS_WEIGHT = 0.3;
  const CGPA_WEIGHT = 0.1;
  const STACK_WEIGHT = 0.2;
  
  function calculateScore(profile) {
    // Calculate a score for each profile based on attributes and weights
    const achievementsScore = profile.achievements.length;
    const stackScore = profile.stackInterested.length // Give 1 if "ml" is in the stack, else 0
    const cgpaScore = profile.cgpa.length;
  
    const score = (
      achievementsScore * ACHIEVEMENTS_WEIGHT +
      stackScore * STACK_WEIGHT +
      cgpaScore * CGPA_WEIGHT
    );
  
    return score;
  }
  
  function rankProfiles(profiles) {
    // Calculate scores for all profiles
    const scores = profiles.map((profile) => ({ name: profile.name, score: calculateScore(profile), profileSummary: profile.profileSummary }));
    // Sort profiles based on their scores (higher scores come first)
    const rankedProfiles = scores.sort((a, b) => b.score - a.score);
  
    return rankedProfiles;
  }
  const db = getDatabase()
  const [profiles, setProfiles] = React.useState([])
  const [rankedprofiles, setRankedProfiles] = React.useState([])
  React.useEffect(() => {
    setProfiles(old=>[])
    const leadsRef = ref(db, 'colleges');
    get(leadsRef).then((snapshot)=>{
        if(snapshot.exists()){
            var colleges = snapshot.val()
            //console.log(colleges)
            Object.values(colleges).forEach(element => {
                Object.values(element.students).forEach(elem=>{
                    //console.log(elold=>em)
                    setProfiles(oldArray => [...oldArray, elem]);
                })
            })
        } 
    })
    

  }, [])

  React.useEffect(()=>{
    console.log(profiles)
    console.log("asdasd")
      // Call the rankProfiles function with your list of profiles
    setRankedProfiles(oldArray => rankProfiles(profiles));
    // rankedprofiles.forEach((profile, index) => {
    //     console.log(`Rank ${index + 1}: ${profile.name} (Score: ${profile.score})`);
    // });
    console.log(rankedprofiles)
  // Print the ranked profiles
  },[profiles])

  return (
      <div className='grid grid-cols-6'>
      <AlumSidebar className="col-span-1" />
        <div className='col-span-4 py-5'>
        {rankedprofiles && rankedprofiles.map(r => 
            <div className='w-[100%] mt-5 ml-5'>
        
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-[#EAEAEA] dark:bg-[#EAEAEA] dark:hover:bg-[#CECECE]">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">{r.name}</h5>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-800">Field: {r.profileSummary}</p>
                    <div className='flex'>
                        {/* <input type="number" name="" placeholder='Amount to fund...' className='px-3' id="" /> */}
                        {isStudent ? <></> : <button className='text-white px-4 py-2 rounded bg-green-800 mr-5'>Chat</button>}
                    </div>
                </div>
            </a>
                </div>
            
            )}
        </div>
        
      </div>
  )
}

export default Recommendations