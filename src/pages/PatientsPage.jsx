// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { UserPlus, Search, Filter, ArrowUpDown } from "lucide-react";
import { Link, useParams } from "react-router-dom";
// import { patInfos } from "../../data/patInfo";
import TopRural from "../components/TopRural";
import { userContext } from "../App";
import { useContext, useState } from "react";

export default function PatientsPage() {
  // Sample patient data
  const { patient } = useContext(userContext);
  const [search, setSearch] = useState('');

  const handleSearch = (e) =>{
      setSearch(e.target.value)
  }


  return (
    <section className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <TopRural />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
          <p className="text-gray-400 text-lg">
            Manage and view patient records
          </p>
        </div>
        <Link to="/dash/patient/new">
          <button className="flex items-center gap-2 bg-indigo-700 rounded-md py-3 px-4 text-white hover:bg-indigo-600 transition-colors ease-in-out">
            <UserPlus className="h-4 w-4" />
            New Patient
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-1 items-center justify-start border rounded-md p-2">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            placeholder="Search patients..."
            className="pl-3 text-[17px] focus:border-none focus:outline-none"
            onChange={handleSearch}
          />
        </div>
        <button
          variant="outline"
          className="flex items-center justify-center gap-2 border py-2 px-6 rounded-md font-semibold sm:text-center"
        >
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="rounded-md border">
        <table className="w-full text-left h-full">
          <thead className="border-b text-gray-500">
            <tr className="">
              <th className="w-[100px] p-4">ID</th>
              <th>
                <div className="flex items-center gap-1 justify-start">
                  Name
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Last Visit</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patient.filter((check) =>{
              return check.name &&  check.name.includes(search)
            }).map((check) => (
              <tr key={check.id} className="border">
                <td className="font-medium p-5">{check.id}</td>
                <td>{check.name}</td>
                <td>{check.age}</td>
                <td>{check.gender}</td>
                <td className="w-[90px] md:w-[200px]">{check.contact}</td>
                <td className="w-[50px] md:w-[200px]">{check.lastVisit}</td>
                <td className="text-center">
                  <Link to={`/dash/patient/${check.id}`}>
                    <button>View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-md text-gray-600">Showing 8 of 100 patients</p>
        <div className="flex items-center gap-2">
          <button className="border py-2 px-3 rounded-md" disabled>
            Previous
          </button>
          <button className="border py-2 px-3 font-medium rounded-md">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
