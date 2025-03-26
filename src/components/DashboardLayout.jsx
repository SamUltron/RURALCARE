import { useState } from "react";
import { Activity, Users, FileText, Settings } from "lucide-react"; // Ensure you have the correct imports
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import SidebarItems from './SidebarItems';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <section className="relative">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      />
      
      <div
        className={`fixed left-0 top-0 z-20 w-64 bg-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:w-full md:bg-transparent`}
      >
        <Sidebar>
          <SidebarItems
            icon={<Activity size={20} color="blue" />}
            text="Dashboard"
            active
          />
          <SidebarItems
            icon={<Users size={20} color="blue" />}
            text="Patients"
          />
          <SidebarItems
            icon={<FileText size={20} color="blue" />}
            text="Records"
          />
          <SidebarItems
            icon={<Settings size={20} color="blue" />}
            text="Settings"
          />
        </Sidebar>
      </div>

      {/* Dashboard Content */}
      <div
        className={`transition-all duration-300 ${isOpen && 'ml-0'}`}
      >
        <Dashboard menu={isOpen} />
      </div>
    </section>
  );
};

export default DashboardLayout;