import { LogOut } from "lucide-react";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Sidebar = ({ children}) => {
  
  return (
    <aside className={`md:flex duration-300 hidden flex-col min-h-screen`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-md">
        <div className=" p-4 border-b flex justify-between items-center gap-2">
          <Link to='/'>
            <div className="flex items-center justify-between gap-2 transition duration-300 active:scale-105">
              <Activity size={20} color="indigo" />
              <h3 className="text-indigo-700 font-bold text-[18px]">RuralCare</h3>
            </div>
          </Link> 
          {/* <div>
            <X size={15} className="block md:hidden"/>
          </div> */}
        </div>
        <ul className="flex-1 px-3 mt-3">{children}</ul>
        <div className="border-t p-3 text-md font-semibold">
          <Link
            to="/dash"
            className="flex items-center justify-center p-3 border rounded-md gap-3 text-indigo-600"
          >
            <LogOut size={15} color="indigo"/>
            Logout
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;



