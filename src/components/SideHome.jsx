import React, { useContext } from 'react';
import {userContext} from "../App"
import Sidebar from './Sidebar'
import { Activity, FileText, Users, Settings, X, LogOut } from "lucide-react";
import SidebarItems from './SidebarItems';
import { Link, Outlet } from 'react-router-dom';


const SideHome = () => {
  const {isClose, closeBar} = useContext(userContext);
  // const{ closeBar} = useContext(userContext);
  
  return (
    <>
    <aside className={`fixed top-0 left-0 h-screen md:hidden duration-300 flex-col ${isClose ? 'translate-x-0': '-translate-x-full'} w-64 transition-all duration-300`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-md">
        <div className=" p-4 border-b flex justify-between items-center gap-2">
          <div className="flex items-center justify-between gap-2">
            <Activity size={20} color="indigo" />
            <h3 className="text-indigo-700 font-bold text-[18px]">RuralCare</h3>
          </div>
          <div>
            <X size={15} className="block md:hidden" onClick={closeBar}/>
          </div>
        </div>
        <ul className="flex-1 px-3 mt-3">
          
            <SidebarItems icon={<Activity size={20} color="indigo" />} text='Dashboard'/>
            <SidebarItems icon={<Users size={20} color="indigo" />} text='Patients'/>
            <SidebarItems icon={<FileText size={20} color="indigo" />} text='Records' />
            <SidebarItems icon={<Settings size={20} color="indigo" />} text='Settings'/>
          </ul>
        <div className="border-t p-3 text-md font-semibold">
          <a
            href="#"
            className="flex items-center justify-center p-3 border rounded-md gap-3 text-indigo-600"
          >
            <LogOut size={15} color='indigo'/>
            Logout
          </a>
        </div>
      </nav>
    </aside>

      <section className='grid md:grid-cols-30/70'>
        <Sidebar>
          <Link to='/dash'>
            <SidebarItems icon={<Activity size={20} color="indigo" />} text='Dashboard'/>
          </Link>
            <Link to='/dash/patient'>
              <SidebarItems icon={<Users size={20} color="indigo" />} text='Patients'/>
            </Link>
            <Link to='/dash/record'>
              <SidebarItems icon={<FileText size={20} color="indigo" />} text='Records' />
            </Link>
            <Link to='/dash/settings'>
              <SidebarItems icon={<Settings size={20} color="indigo" />} text='Settings'/>
            </Link>
        </Sidebar>
        <Outlet/>

      </section>
    </>
  )
}

export default SideHome