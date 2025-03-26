import React from 'react'
import { useContext } from "react";
import { userContext } from "../App";
import { Activity, Menu } from 'lucide-react';

const TopRural = () => {
    const { closeBar } = useContext(userContext);
    console.log()
  return (
        <div className="p-4 border-b flex justify-between items-center gap-2 md:hidden">
          <div className="flex items-center justify-between gap-2">
            <Activity size={20} color="indigo" />
            <h3 className="text-indigo-700 font-bold text-[18px]">RuralCare</h3>
          </div>
          <div>
            <Menu size={15} className="md:hidden" onClick={closeBar} />
          </div>
        </div>
  )
}

export default TopRural