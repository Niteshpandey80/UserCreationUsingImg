import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {
    const [name ,setName] = useState("");
    const [email, setEmail] = useState("");
    const [image , setImage] = useState("")


    const handleSubmit = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3000/add' ,{name , email ,image});
        setName("") ; setEmail("");setImage("");
        alert("User Added")

    }
  return (
    <div  className=' flex items-center justify-center mt-30'>
      <form  onSubmit={handleSubmit} className='flex flex-col gap-7'>
        <input type="text"  placeholder='Enter Your Name ' value={name}  className='border border-white p-2 rounded' onChange={(e)=>setName(e.target.value)}/>
        <input type="text"  placeholder='Enter Your Email ' value={email}  className='border border-white p-2 rounded' onChange={(e)=>setEmail(e.target.value)} />
        <input type="text"  placeholder='Profile Url '  value={image} className='border border-white p-2 rounded' onChange={(e)=>setImage(e.target.value)}/>
        <button  type='submit' className='bg-blue-700'>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser
