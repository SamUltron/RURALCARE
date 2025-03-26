import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"


const DemoBtn = () => {
  return (
    <div className='flex justify-center my-10'>
      <Link to='/dash'>
        <button className="bg-indigo-700 text-white text-md font-medium py-2 px-6 rounded-md flex items-center justify-center gap-x-2 transition-all duration-300 hover:bg-indigo-600 active:scale-105">
            Explore Dashboard Demo 
            <ArrowRight size={16} className="place-content-center"/>
        </button>
      </Link>
    </div>
  )
}

export default DemoBtn