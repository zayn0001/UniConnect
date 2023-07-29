import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudSidebar from '../components/StudSidebar';

function StudentProfilePage(props) {
  const { name, studentId, profileSummary, dep, batchYear, stackInterested, cgpa, achievements } = props;
  const isStudent = localStorage.getItem("user") == "student"
  return (
    <div className='grid grid-cols-6'>
      {isStudent ? (<StudSidebar className="col-span-1" />
      ) : (
      <AlumSidebar className="col-span-1" />
      )}
      <div className='col-span-5 grid grid-cols-2 gap-4 py-5' style={{width: "80vw"}}>
    <div className="container w-[190%]">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {name}
      </motion.h1>
      <motion.p
        className="text-gray-500"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {profileSummary}
      </motion.p>
      <div className="flex flex-wrap mt-4">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-5">
          <motion.div
            className="bg-gradient-to-r from-green-200 to-gray-200 rounded-lg p-4 shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-lg font-bold mb-2">Personal Information</h2>
            <ul>
              <li><strong>Student ID:</strong> {studentId}</li>
              <li><strong>Department:</strong> {dep}</li>
              <li><strong>Batch Year:</strong> {batchYear}</li>
            </ul>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-5">
          <motion.div
            className="bg-gradient-to-r from-green-200 to-gray-200 rounded-lg p-4 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-lg font-bold mb-2">Skills and Interests</h2>
            <ul>
              <li><strong>Stack Interested:</strong> {stackInterested}</li>
              <li><strong>CGPA:</strong> {cgpa}</li>
            </ul>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-5">
          <motion.div
            className="bg-gradient-to-r from-green-200 to-gray-200 rounded-lg p-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-lg font-bold mb-2">Achievements</h2>
            <p>{achievements}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
              Create
            </button>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-5">
          <motion.div
            className="bg-gradient-to-r from-green-200 to-gray-200 rounded-lg p-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-lg font-bold mb-2">Events</h2>
            {/* Content for Events goes here */}
            <p>{/* Add event content here */}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
              Create
            </button>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-5">
          <h2 className="text-lg font-bold mb-2">Recent Achievements</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {[
              { color: 'second', textColor: 'secondary' },
              { color: 'success', textColor: 'success' },
            ].map((item, index) => (
              <CCard
                textColor={item.textColor}
                className={`mb-3 border-${item.color}`}
                style={{ maxWidth: '18rem' }}
                key={index}
              >
                <CCardHeader>Achievements</CCardHeader>
                <CCardBody>
                  <CCardTitle>{item.color} </CCardTitle>
                  <CCardText>
                    LearnMate Ai 
                  </CCardText>
                </CCardBody>
              </CCard>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default StudentProfilePage;
