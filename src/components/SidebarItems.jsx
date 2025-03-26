import React from 'react'

const SidebarItems = ({icon, text}) => {
  return (
        <div className='mb-4'>
            <li className='flex items-center py-2 px-3 my-1 font-medium cursor-pointer transition-colors text-indigo-700 hover:bg-indigo-400 hover:text-white rounded-md'>
                {icon}
                <span className='ml-3'>{text}</span>
            </li>
        </div>

  )
}

export default SidebarItems