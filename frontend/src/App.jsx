import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import ShowUser from './components/ShowUser'
import CreateUser from './components/CreateUser'

const App = () => {
  
  return (
     <div className='h-screen w-screen bg-black text-white'>
      <div className='p-4'>
            <nav className='flex gap-4 mb-6'> 
              <Link to='/' className='text-blue-400'>CreateUser</Link>
              <Link to='/users' className='text-blue-400' >Show Users</Link>
            </nav>
            <Routes>
               <Route path='/' element={<CreateUser/>}/>
              <Route path='/users' element={<ShowUser/>} />
            </Routes>
     </div>
     </div>
  )
}

export default App
