import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Course from '../Components/Course'


function Courses() {

  return (
    <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Navbar/>
    {/* <div className=' dark:bg-slate-900 min-h-screen'> */}
    <Course/>
    {/* </div> */}
    <Footer/>
  </div>
    </>
  )
}

export default Courses