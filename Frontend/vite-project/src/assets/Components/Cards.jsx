import React from 'react'

function Cards({item}) {
    //console.log(item);
  return (
    <>
    <div className=' dark:bg-slate-900 mx-4 my-4 flex space-x-4 p-3 hover:scale-105 duration-200'>
    <div className="card w-92 bg-white shadow-xl text-black dark:bg-slate-800 dark:text-white">
  <figure><img src= {item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.catgory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards