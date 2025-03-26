import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Activity } from 'lucide-react'
import LogIn from '../components/LogIn'

const LoginPage = () => {
  return (
    <section className='min-h-screen bg-[#f4f4f566] flex flex-col justify-start items-center'>
        <a href="/" className='absolute top-4 left-3 text-md flex items-center justify-center gap-2 text-[#71717a] hover:text-black'>
            <ArrowLeft size={15}/>
            Back to Home
        </a>
        <div className='flex flex-col items-center justify-center mt-10'>
          <div className='flex items-center gap-2'>
              <Activity size={25} color='blue'/>
              <h3 className='text-indigo-700 font-bold text-2xl'>RuralCare</h3>
          </div>
          <LogIn/>
        </div>
    </section>
  )
}

export default LoginPage