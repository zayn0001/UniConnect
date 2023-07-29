import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation1 from "../assets/animation_lknxvexf.json";
import animation2 from "../assets/animation_lknxwkpw.json"
import animation3 from "../assets/animation_lknxx7d0.json"
import animation4 from "../assets/animation_lknxxqb5.json"
import animation5 from "../assets/animation_lknye2ug.json"
import animation6 from "../assets/animation_lknyeh5a.json"



const COLORS = ["#0088FE", "#FFBB28"];

const Dashboard = () => {
  const [impTopicContent, setImpTopicContent] = useState("");
  const [topicListContent, setTopicListContent] = useState("");
  const [clusterQuestionsContent, setClusterQuestionsContent] = useState("");
  const [module1Content, setModule1Content] = useState("");
  const [showModule1Content, setShowModule1Content] = useState(false);

  useEffect(() => {
    fetch("Files/generated_files/imp_topic_list.txt")
      .then((response) => response.text())
      .then((text) => setImpTopicContent(text))
      .catch((error) => console.log(error));

    fetch("Files/generated_files/topic_list.txt")
      .then((response) => response.text())
      .then((text) => setTopicListContent(text))
      .catch((error) => console.log(error));

    fetch("Files/generated_files/cluster_questions.txt")
      .then((response) => response.text())
      .then((text) => setClusterQuestionsContent(text))
      .catch((error) => console.log(error));
  }, []);

  const fetchModule1Content = () => {
    fetch("Files/generated_files/summarised_notes/module1_summarized.txt")
      .then((response) => response.text())
      .then((text) => {
        setModule1Content(text);
        setShowModule1Content(true);
      })
      .catch((error) => console.log(error));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-screen">
      {/* <Navbar /> */}
      <div className="flex flex-col items-center h-screen w-screen text-center bg-gradient-to-tr from-purple-700 via-slate-600 to-black ">
         <h1 className="text-white text-3xl text-center mt-20">Welcome {localStorage.getItem('username')} !</h1>
         <div className="grid grid-cols-3 gap-6 py-12 h-4">
        
          {localStorage.getItem('user') == "alumini" ? <Link to="/alumini/allfund">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation6} className="h-28" />
            <h2 className="mt-4">Profile</h2>
            
          </motion.div>
          </Link> : 
          <Link to="/student/profile">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation6} className="h-28" />
            <h2 className="mt-4">Profile</h2>
            
          </motion.div>
          </Link>
          }
          <Link to="/volunteerreq">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation5} className="h-28" />
            <h2 className="mt-4">1 to 1 Chat</h2>
            
          </motion.div>
          </Link>
          {localStorage.getItem('user') == "alumini" ? <Link to="/alumini/allfund">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation1} className="h-28" />
            <h2 className="mt-4">Fund Students</h2>
            
          </motion.div>
          </Link> : 
          <Link to="/student/insertfund">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation1} className="h-28" />
            <h2 className="mt-4">Request for funds</h2>
            
          </motion.div>
          </Link>
          }
          {localStorage.getItem('user') == "alumini" ? <Link to="/alumini/events">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation2} className="h-28" />
            <h2 className="mt-4">Events</h2>
            
          </motion.div>
          </Link> : 
          <Link to="/alumini/events">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation2} className="h-28" />
            <h2 className="mt-4">Search Events</h2>
            
          </motion.div>
          </Link>
          }
          {localStorage.getItem('user') == "alumini" ? <Link to="/alumini/newjob">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation3} className="h-28" />
            <h2 className="mt-4">Upload Job/Interview Opening</h2>
            
          </motion.div>
          </Link> :
          <Link to="/jobs">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation3} className="h-28" />
            <h2 className="mt-4">Apply for jobs</h2>
            
          </motion.div>
          </Link> 
          }
          <Link to="/communities">
          <motion.div
            className="bg-slate-100 rounded-lg px-5 shadow-lg py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Lottie animationData={animation4} className="h-28" />
            <h2 className="mt-4">Interact with the community</h2>
            
          </motion.div>
          </Link>
               
          </div>        
        </div>
      </div>
    
  );
};

export { Dashboard as default };    