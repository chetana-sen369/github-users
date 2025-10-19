import React, { useEffect, useState,createContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import { UserContext } from './context/Context.jsx'; 
//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/About";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";

const App = () => {
  const [users,setUsers]=useState([]);
  const [defaultUsers, setDefaultUsers] = useState([]);
  const [loading,setLoading]=useState(false);//for home page 
  const [userLoading, setUserLoading] = useState(false); //for userProfile Page
  
  useEffect(() => {
  const getData = async () => {
    try {
      setLoading(true); 
      const { data } = await axios.get("https://api.github.com/users");
      setUsers(data);
      setDefaultUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  };

  getData(); 
}, []);

  async function searchUsers(username){
    try{
      setLoading(true);
      const {data}=await axios.get(`https://api.github.com/search/users?q=${username}`);
      setUsers(data.items);
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  }
  const getUser=async(userName)=>{
      try{
          
        const {data}=await axios.get(`https://api.github.com/users/${userName}`);
        return data;
      }catch(error){
        console.log(error);
      }
  }
 const contextValue={
  users,setUsers,
  defaultUsers,searchUsers,getUser,
   loading,setLoading,
  userLoading, setUserLoading};
  
  return (
    <>
    <UserContext.Provider value={contextValue}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/userPage/:userId" element={<UserPage />} />
      </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
