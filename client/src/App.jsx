import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FundPage from './pages/FundPage'
import ProfPage from './pages/AlumProfPage'
import Communities from './pages/Communities'
import AlumDash from './pages/AlumDash'
import LoginPage from './pages/LoginPage'
import StudDash from './pages/StudDash'
import InsertFund from './pages/InsertFund'
import StudProfPage from './pages/StudProfPage'
import CreateEvent from './pages/CreateEvent'
import SignUpPage from './pages/SignUpPage'
import RegPage from './pages/RegPage'
import CreateComm from './pages/CreateComm'
import Community from './pages/Community'
import ChatPage from './pages/ChatPage'
import Events from './pages/Events'
import Jobs from './pages/Jobs'
import CreateJob from './pages/CreateJob'
import Recommendations from './pages/Recommendations'
import OneChat from './pages/OneChat'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path= "/signup" element={<SignUpPage />} />
          <Route path= "/createComm" element={<CreateComm />} />
          <Route path= "/community/:subject" element={<Community />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/volunteerreq" element={<ChatPage />} />
          <Route path= "/StudProfPage" element={<StudProfPage />} />
          <Route path="/jobs" element={<Jobs />} />


          {/* Alumini  */}
          <Route path="/alumini/events" element={<Events />} />
            <Route path="/alumini/home" element={<AlumDash />} />
            <Route path="/alumini/allFund" element={<FundPage />} />
            <Route path="/alumini/profile" element={<ProfPage />} />
            <Route path="/alumini/register" element={<RegPage />} />
            <Route path="/alumini/newjob" element={<CreateJob />} />
          {/* Alumini ddd */}
          
          
          {/* Student  */}
            <Route path="/student/home" element={<StudDash />} />
            <Route path="/student/insertfund" element={<InsertFund />} />
            <Route path="/student/newevent" element= {<CreateEvent />} />
            <Route path="/student/profile" element={<StudProfPage />} />
            <Route path="/messages/:from/:to" element={<OneChat />} />
            <Route path="/alumini/recommendations" element={<Recommendations />} />
          {/* Student  */}


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App