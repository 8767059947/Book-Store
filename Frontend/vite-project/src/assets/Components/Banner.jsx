import React from 'react'
import { useForm } from "react-hook-form"
import banner from "../../../public/Banner.jpg";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthProvider';
import Logout from './Logout';
function Banner() {
  const [authUser, setauthUser] = useAuth();
  console.log(authUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) =>
    {
      const userInfo = {
        email:data.email,
        password:data.password,
      }
      await axios.post("https://book-store-api-nu.vercel.app/user/login",userInfo)
      .then((res) =>
      {
        console.log(res.data);
        if(res.data){
          toast.success("Logged In Successfully!");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
  
      }).catch((err) =>
      {
        if(err.response){
          console.log(err);
        toast.error("Error:" +  err.response.data.message);
        }
      })
    }
  return (
    <>
    <div className=" dark:bg-slate-900 dark:text-white text-black max-w-screen-2xl container mx-auto md: px-20 px-4 flex flex-col md:flex-row my-10">
        <div className='dark:bg-slate-900 dark:text-white order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
       <div className='space-y-12'>
       <h1 className='text-4xl font-bold'>
            Hello, welcome here to learn something {" "}
            <span className='text-pink-500'>new everyday!!!</span>
        </h1>
        <p className='text-2xl'>Books: portals to new worlds, galaxies of knowledge, and whispers of forgotten stories. They fit in your hand, but hold universes within. </p>
        {
          authUser?<Logout/>:
        <form action=""  onSubmit={handleSubmit(onSubmit)}>
        <label className="input input-bordered bg-white flex items-center gap-2 dark:bg-slate-900 mr-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow text-black dark:text-white " placeholder="Email" {...register("email", { required: true })} />
  <br />
  {errors.email && <span className='text-red-500'>This field is required</span>}
</label>
<br />

<label className="input input-bordered bg-white flex items-center gap-2 dark:bg-slate-900 mr-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="password" className="grow text-black dark:text-white mr-4" placeholder="Password" {...register("password", { required: true })} />
  {errors.password && <span className='text-red-500'>This field is required</span>}
</label>

  

 <div className='flex justify-center'>
       <button className="btn btn-secondary mt-6">Login</button>
       </div> 
    
        </form>
   }     
       


       </div>
        </div>
        <div className=" dark:bg-slate-900 overflow-hidden w-92 h-92 order-1 w-full md:w-1/2">
        <img src={banner} alt="" className="  object-cover"/>
        </div>
    </div>
    </>
  )
}

export default Banner
