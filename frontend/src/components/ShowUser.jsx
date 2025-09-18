import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

const ShowUser = () => {
    const [user , setUser] = useState([]);

    useEffect(()=>{
       axios.get('http://localhost:3000/user').then((res)=>setUser(res.data))
    },[]);

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
                </div>
            ))}
             
           </div>
      ) }

    </div>
  )
}

export default ShowUser
