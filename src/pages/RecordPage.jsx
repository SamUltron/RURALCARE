import { Search, Filter,  FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { recordInfos } from "../../data/recordInfo";
import TopRural from "../components/TopRural";
import { useState } from "react";

const RecordPage = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) =>{
      setSearch(e.target.value)
  }

  return (
    <section className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <TopRural />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Medical Records
          </h1>
          <p className="text-gray-400 text-lg">
          View and manage patient medical records
          </p>
        </div>
        <Link to="/dashboard/record/new">
          <button className="flex items-center gap-2 bg-indigo-700 rounded-md py-3 px-4 text-white hover:bg-indigo-600 transition
            duration-300 ease-in-out">
            <FileText className="h-4 w-4" />
            New Record
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-1 items-center justify-start border rounded-md p-2">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            placeholder="Search records..."
            className="pl-3 text-[17px] focus:border-none focus:outline-none"
          onChange={handleSearch}/>
        </div>
        <button
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
              <th className="w-[100px] py-4 px-5">ID</th>
              <th>
                <div className="flex items-center gap-1 justify-start">
                  Patient
                </div>
              </th>
              <th>Type</th>
              <th>Date</th>
              <th>Doctor</th>
              <th className="text-right px-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recordInfos.filter((record) =>{
              return record.patientName.includes(search)
            }).map((record) => (
              <tr key={record.id} className="border">
                <td className="font-medium p-5">{record.id}</td>
                <td>{record.patientName} ({record.patientId})</td>
                <td>{record.type}</td>
                {/* <td>{record.date}</td> */}
                <td className="w-[90px] md:w-[200px]">{record.date}</td>
                <td className="w-[50px] md:w-[200px]">{record.doctor}</td>
                <td className="text-right">
                  <div className="flex justify-end gap-1">
                    <button className="hover:bg-gray-200 rounded-md p-4">
                      <FileText className="h-4 w-4" />
                    </button>
                    <button className="hover:bg-gray-200 rounded-md p-4">
                      {/* \ */}
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
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
};

export default RecordPage;
