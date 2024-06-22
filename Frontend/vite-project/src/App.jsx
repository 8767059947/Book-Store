import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './assets/home/Home'
import Course from './assets/Components/Course'
import { Route, Routes } from 'react-router-dom'
import Courses from './assets/Courses/Courses'
import Contact from './assets/Components/Contact'
function App() {
  

  return (
    <>
     {/* <Home/>
     <Course/> */}
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/course' element = {<Courses/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
      
     </Routes>
     </div>
      
    </>
  )
}

export default App
