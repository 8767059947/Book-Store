import React from 'react'
import list from "../../../public/list.json"
import Cards from './Cards'
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
    
    <div className='dark:text-white dark:bg-slate-900 text-black max-w-screen-2xl container mx-auto md: px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center dark:bg-slate-900'>
            <h1 className='text-2xl  md:text-4xl'>We're delighted to have you {" "} <span className='text-pink-500'>Here ! :)</span></h1>
            <p className='mt-12'>Books are portals. They crack open worlds unseen, whisk you back through time, or set you hurtling towards the future. Within their pages, dragons soar, detectives chase clues, and historical figures whisper secrets. Whether crafted from crisp, new paper or worn with age, books are vessels of knowledge, brimming with stories, ideas, and experiences. They can be best friends, offering comfort and escape, or trusted teachers, patiently imparting wisdom. With every turn of the page, a new adventure awaits, waiting to spark your imagination and ignite a lifelong love of learning. </p>
            <Link to="/">
            <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {list.map((item) => (
                <Cards key = {item.id} item = {item} />
            ))}
        </div>
    </div>
    </>
  )
}

export default Course