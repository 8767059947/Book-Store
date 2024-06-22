import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [message, setMessage] = useState(" ");

    const handleSubmit = (e) =>
        {
            e.preventDefault();

            const serviceId = "service_gawovlb";
            const templateId = "template_72erodv"
            const publicKey = "EDWvTSSx3zmRkPBRk";

            const templateParams = {
                from_name: name,
                from_email:email,
                to_name: "Veer Pardeshi",
                message:message,
            }

            emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) =>
            {
                console.log("Email sent successfully!", response);
                setName(" ");
                setEmail(" ");
                setMessage(" ");

            })
            .catch((err) =>
            {
                console.error("Error sending email:", err);
            })
        };
  return (
    <>
    <div bg-white text-black dark:bg-slate-900 dark:text-white>
        <Navbar/>
        <h1  className='dark:text-white text-black mt-24 text-2xl text-center'>Really Thankful for being intereacting with us !</h1>
        <div className='flex flex-col mt-16 bg-white text-black dark:bg-slate-900 dark:text-white justify-center'>
        <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center'>

<div  className=' mt-4 space-y-2 dark:bg-slate-900 dark:text-white flex flex-nowrap justify-center'>

<label className="input input-bordered flex items-center gap-2 bg-white text-black dark:bg-slate-800 dark:text-white">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Username" onChange={(e) => setName(e.target.value)}/>
</label>

</div>

<div className=' mt-4 space-y-2 dark:bg-slate-900 dark:text-white flex justify-center flex-nowrap'>
<label className="input input-bordered border flex items-center gap-2 bg-white text-black dark:bg-slate-800 dark:text-white">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
</label>
</div>
<div className=' mt-4 space-y-2 dark:bg-slate-900 dark:text-white flex justify-center flex-nowrap'>
<textarea cols= "30" rows = "10" className="textarea textarea-bordered bg-white text-black dark:bg-slate-800 dark:text-white" placeholder="Enter message.." onChange={(e) => setMessage(e.target.value)}></textarea>
</div>

      
<div className='flex justify-center mt-5'>

<button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1'>Send Email</button>
</div>
            
    
        </form>
        </div>

        <Footer/>
    </div>
    </>
  )
}

export default Contact