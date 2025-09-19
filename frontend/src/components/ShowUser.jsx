import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

const ShowUser = () => {
    const [user , setUser] = useState([]);

    const fatchUser = ()=>{
      axios.get('http://localhost:3000/user').then((res)=>setUser(res.data))
    };
    useEffect(()=>{
         fatchUser();
    },[])
    const handleDelete = async(id)=>{
      axios.delete(`http://localhost:3000/user/${id}`);
      fatchUser();
      alert('User Deleted')
    }
  return (
    <div>
      <h1>All Users</h1>
      {user.length === 0 ? (
        <p className='text-xl text-red-500'>There Is no User </p>
      ):(
           <div className='flex flex-wrap gap-4 p-8'>
            {user.map((u,i)=>(
                <div key={i} className="border p-4 w-40 text-center rounded">
                   <img src={u.image} alt={u.name} className="w-20 h-20 mx-auto mb-2 rounded-full" />
                   <h3>{u.name}</h3>
                   <p className="text-sm text-gray-500">{u.email}</p>
                   <div className='flex gap-12 text-sm'><button className='text-blue-600 text-sm mt-4'>edit</button><button className='text-red-500 text-sm mt-4' onClick={()=>handleDelete(u._id)}>Delete</button></div>
                </div>
            ))}
             
           </div>
      ) }

    </div>
  )
}

export default ShowUser
