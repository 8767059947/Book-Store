import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const[authUser, setauthUser] = useAuth()

    const handleLogout = () =>
    {
        try{
            setauthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Log out Successfully!");
            setTimeout(() => {
                window.location.reload();
              }, 1000);
        }catch(err){
            toast.error("Error: " + error.message);

        }
    }

  return (
    <div className='flex justify-center'>
       <button className='px-3 py-2 bg-red-500 rounded-md text-white cursor-pointer' onClick={handleLogout}>Log out</button> 
    </div>
  )
}

export default Logout