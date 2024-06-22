import React from 'react'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    const modal = document.getElementById('my_modal_3');
    modal.close(); // Use the close() method of the dialog element // Log form data
    // You can add logic here to handle form submission (e.g., send data to server)
  }

  const handleCloseModal = () => {
    const modal = document.getElementById('my_modal_3');
    modal.close(); // Use the close() method of the dialog element
  }

  return (
    <>
      <div className='bg-white text-black dark:bg-slate-900 dark:text-white'>
        {/* Modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box ml-2 bg-white text-black dark:bg-slate-800 dark:text-white">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
            <form onSubmit={handleSubmit(onSubmit)}> {/* Remove method="dialog" */}
              {/* Close Button */}
              

              

              {/* Rest of your form code */}
              {/* Close Button */}




              <h3 className="font-bold text-lg text-pink-500 font-semibold">Sign Up</h3>



              {/* Rest of your form code */}

            



 {/* if there is a button in form, it will close the modal */}



{/*       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}



    



    



    {/* Email */}



    <div className='ml-16 mt-4 space-y-2 dark:bg-slate-800 dark:text-white'>



       <span className='dark:bg-slate-800  dark:text-white-500'>Email:</span> 



       <br />



       <input type="text"



       placeholder='Enter your email' className='dark:bg-slate-800  dark:text-white w-80 px-3 py-1 border rounded-md outline-none bg-white text-black-900' 



       {...register("email", { required: true })}



       />



       <br />



       {errors.email && <span className='text-red-500'>This field is required</span>}



    </div>



    {/* Name */}



    <div className='ml-16 mt-4 space-y-2'>



       <span className=''>Name:</span> 



       <br />



       <input type="text"



       placeholder='Enter your full name' className='w-80 px-3 py-1 border rounded-md outline-none bg-white text-black dark:bg-slate-800 dark:text-white'



       {...register("name", { required: true })}



       />



       <br />



       {errors.name && <span className='text-red-500'>This field is required</span>}



    </div>



    {/* Password */}



    <div className=' ml-16 mt-4 space-y-2'>



       <span className=''>Password:</span> 



       <br />



       <input type="password"



       placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none bg-white text-black dark:bg-slate-800 dark:text-white'



       {...register("password", { required: true })}



       />



       <br />



       {errors.password && <span className='text-red-500'>This field is required</span>}



    </div>


              <div className='flex justify-center mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1'>Sign Up</button>
              </div>
            </form>
          </div>
        </dialog>

        {/* Rest of your component content */}
      </div>
    </>
  )
}

export default Signup
