import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './assets/home/Home'
import Course from './assets/Components/Course'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './assets/Courses/Courses'
import Contact from './assets/Components/Contact'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
function App() {
  const [authUser, setauthUser] = useAuth();
  console.log(authUser);
  

  return (
    <>
     {/* <Home/>
     <Course/> */}
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/course' element = {authUser?<Courses/>:toast.error("You need to log in First!")}/>
      <Route path='/contact' element = {<Contact/>}></Route>
      
     </Routes>
     <Toaster />
     </div>
      
    </>
  )
}

export default App
