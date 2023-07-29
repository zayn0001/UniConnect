import React from 'react'
import { useParams } from 'react-router-dom';
import { getDatabase, set, get, push, update, ref } from "firebase/database"
const CommunityChat = () => {
    const { subject } = useParams();
    const [message, setMessage] = React.useState('')
    const [allMssgs, setAllMssgs] = React.useState([])
    React.useEffect(() => {
      const db = getDatabase()
      const messageRef = ref(db, 'community/' + subject);
      get(messageRef).then((snapshot) => {
        if (snapshot.exists()) {
          const mssgData = snapshot.val();
          setAllMssgs(mssgData.messages)
          console.log(mssgData.messages)
        }
      })
    }, [])
    const handleMessage = (e) => {
      e.preventDefault()
        const db = getDatabase()
        const newMessage = {
          message: message,
          username: localStorage.getItem('username'),
          type: localStorage.getItem('user')
        };
        const messageRef = ref(db, 'community/' + subject);
        get(messageRef).then((snapshot) => {
          if (snapshot.exists()) {
            const mssgData = snapshot.val();
            let currentMssgs = mssgData.messages || [];
            currentMssgs.push(newMessage)
            update(messageRef, {
              messages: currentMssgs
            });
            setAllMssgs(currentMssgs)
          }
        })
        // navigate('/communities')
    }
  return (
    <>
<div className="container mx-auto shadow-lg rounded-lg">
    <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
      <div className="font-semibold text-2xl">{subject && subject}</div>
      <div
        className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center"
      >
        RA
      </div>
    </div>
    <div className="flex flex-row justify-between bg-white">
      <div className="w-full px-5 flex flex-col justify-between">
        <div className="flex flex-col mt-5">
            {allMssgs && allMssgs.map(message => (
              <>
              {message.username == localStorage.getItem('username') ? <div className="flex justify-end mb-4">
                <div
                className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                >
                {message.message}
                </div>
              </div>
              : message.type == "student" ?
            <div className="flex justify-start mb-4">
                <div
                className="ml-2 py-3 px-4 bg-gray-800 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                >
                {message.message}
                </div>
            </div>
            : message.type == "alumini" ?
            <div className="flex justify-start mb-4">
                <div
                className="ml-2 py-3 px-4 bg-green-600 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                >
                {message.message}
                </div>
            </div>
            : <></>
            }
            </>
            ))
            }
        </div>
        <div className="py-5 flex justify-around">
          <input
            onChange={(e) => setMessage(e.target.value)}
            className="w-[80%] bg-gray-300 py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..."
          />
          <button onClick={handleMessage} className='bg-blue-500 text-white px-3 py-2 rounded'>Send</button>
        </div>
      </div>
      </div>
    </div>
    </>
  ) 
}

export default CommunityChat