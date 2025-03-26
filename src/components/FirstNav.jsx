import { Activity } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';
import '../back.css';

const FirstNav = () => {
  return (
    <nav className='flex justify-between border-b border-b-indigo-100 p-4 back'>
        <Link to='/'>
          <div className='flex items-center gap-2'>
              <Activity size={25} color='indigo'/>
              <h3 className='text-indigo-600 font-bold text-2xl'>RuralCare</h3>
          </div>
          </Link>
        <Link to='/login'>
          <button className='bg-indigo-700 py-2 px-4 text-center rounded-md active:scale-105 text-white text-md'>Login</button>
        </Link>
    </nav> 
  )
}

export default FirstNav