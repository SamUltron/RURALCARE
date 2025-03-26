import {
  ArrowLeft,
  Edit,
  FileText,
  Activity,
  Calendar,
  Pill,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { checkups } from "../../data/medical";
import { pills } from "../../data/drugs";
import { results } from "../../data/testResults";
import TopRural from "../components/TopRural";

export default function PatientDetailPage() {
  const [patient, setPatient] = useState([]);
  const [isMedication, setIsMedication] = useState('overview');
  const [isActive, setisActive] = useState("overview");
  const { id } = useParams();

  const checkMedication = (form) => {
    setIsMedication(form);
    setisActive(form);
  };

  // const stay = useMemo(()=>{
  //   return chackMedicine(isMedication)
  // }, [isActive])

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`http://localhost:4000/patient/${id}`);
        const data = await res.json();
        setPatient(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
      //  finally {
      //    setLoading(false);
      //  }
    };
    fetchDetail();
  }, [id]);

  // const patient = {
  //   id: params.id,
  //   name: "Maria Garcia",
  //   age: 42,
  //   gender: "Female",
  //   dateOfBirth: "1981-05-15",
  //   bloodType: "O+",
  //   address: "123 Rural Road, Countryside, CA 95432",
  //   contact: "+1 555-123-4567",
  //   email: "maria.garcia@example.com",
  //   emergencyContact: "Juan Garcia (Husband): +1 555-987-6543",
  //   allergies: "Penicillin, Peanuts",
  //   currentMedications: "Lisinopril 10mg daily, Metformin 500mg twice daily",
  //   medicalHistory:
  //     "Type 2 Diabetes (diagnosed 2018), Hypertension (diagnosed 2019)",
  //   lastVisit: "2023-03-15",
  // };

  return (
    <div className="p-6 space-y-6">
      <TopRural />
      <div className="flex items-center gap-2">
        <Link to="/dash/patient">
          <button>
            <ArrowLeft className="h-4 w-4" />
          </button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{patient.name}</h1>
          <p className="text-gray-500">Patient ID: {patient.id}</p>
        </div>
        <div className="ml-auto">
          <button className=" flex items-center justify-center border py-2 px-3 gap-2 font-medium rounded-md">
            <Edit className="h-4 w-4" />
            Edit Patient
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="border p-5 rounded-md">
          <div className="mb-3">
            <h3 className="text-3xl font-semibold tracking-tight mb-1">
              Patient Information
            </h3>
            <p className="text-sm text-gray-500">
              Personal and contact details
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-1 space-y-1">
              <div className="text-base font-medium">Age</div>
              <div className="text-sm">{patient.age}</div>

              <div className="text-sm font-medium">Gender</div>
              <div className="text-sm">{patient.gender}</div>

              <div className="text-sm font-medium">Date of Birth</div>
              <div className="text-sm">{patient.dateOfBirth}</div>

              <div className="text-sm font-medium">Blood Type</div>
              <div className="text-sm">{patient.bloodType}</div>

              <div className="text-sm font-medium">Address</div>
              <div className="text-sm">{patient.address}</div>

              <div className="text-sm font-medium">Contact</div>
              <div className="text-sm">{patient.contact}</div>

              <div className="text-sm font-medium">Email</div>
              <div className="text-[12px] w-4">{patient.email}</div>

              <div className="text-sm font-medium">Emergency Contact</div>
              <div className="text-sm">{patient.emergencyContact}</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 border p-5 rounded-md">
          <div className="mb-3">
            <h3 className="text-3xl font-semibold tracking-tight mb-1">
              Medical Information
            </h3>
            <p className="text-sm text-gray-500">Health records and history</p>
          </div>
          <div>
            <div>
              <div className="grid grid-cols-4 mb-4 bg-zinc-200 place-items-center rounded-md font-medium text-gray-500 py-1 cursor-pointer text-sm">
                <div
                  onClick={() => checkMedication("overview")}
                  className={`${isActive === 'overview' ? "text-black bg-white rounded-md px-8 py-[3px] w-fit" : ''}`}
                >
                  Overview
                </div>
                <div
                  onClick={() => checkMedication("visits")}
                  className={`${isActive === 'visits' ? "text-black bg-white rounded-md px-8 py-[3px] w-fit" : ''}`}
                >
                  Visits
                </div>
                <div
                  onClick={() => checkMedication("medications")}
                  className={`${isActive === 'medications' ? "text-black bg-white rounded-md px-8 py-[3px] w-fit" : ''}`}
                >
                  Medications
                </div>
                <div
                  onClick={() => checkMedication("tests")}
                  className={`${isActive === 'tests' ? "text-black bg-white rounded-md px-8 py-[3px] w-fit" : ''}`}
                >
                  Test Results
                </div>
              </div>

              {isMedication === "overview" && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Allergies</h3>
                    <p className="text-sm">{patient.allergies}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      Current Medications
                    </h3>
                    <p className="text-sm">{patient.currentMedications}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      Medical History
                    </h3>
                    <p className="text-sm">{patient.medicalHistory}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Last Visit</h3>
                    <p className="text-sm">{patient.lastVisit}</p>
                  </div>
                </div>
              )}

              {isMedication === "visits" && (
                <div>
                  <div className="space-y-4">
                    {checkups.map((visit, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">{visit.date}</span>
                          <span className="text-muted-foreground">
                            ({visit.reason})
                          </span>
                        </div>
                        <p className="text-sm mb-1">
                          <span className="font-medium">Doctor:</span>{" "}
                          {visit.doctor}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Notes:</span>{" "}
                          {visit.notes}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isMedication === "medications" && (
                <div>
                  <div className="space-y-4">
                    {pills.map((medication, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Pill className="h-4 w-4 text-primary" />
                          <span className="font-medium">{medication.name}</span>
                          <span className="text-muted-foreground">
                            ({medication.dosage})
                          </span>
                        </div>
                        <p className="text-sm mb-1">
                          <span className="font-medium">Frequency:</span>{" "}
                          {medication.frequency}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Period:</span>{" "}
                          {medication.startDate} to {medication.endDate}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isMedication === "tests" && (
                <div>
                  <div className="space-y-4">
                    {results.map((test, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Activity className="h-4 w-4" />
                          <span className="font-medium">{test.name}</span>
                          <span className="text-gray-500">({test.date})</span>
                        </div>
                        <p className="text-sm mb-1">
                          <span className="font-medium">Result:</span>{" "}
                          {test.result}
                        </p>
                        <p className="text-sm mb-1">
                          <span className="font-medium">Normal Range:</span>{" "}
                          {test.normalRange}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Status:</span>{" "}
                          {test.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button className=" flex items-center justify-center border py-2 px-3 gap-2 font-medium rounded-md">
          <FileText className="h-4 w-4" />
          Generate Report
        </button>
        <button className=" flex items-center justify-center border py-2 px-3 gap-2 font-medium rounded-md">
          <Calendar className="h-4 w-4" />
          Schedule Appointment
        </button>
      </div>
    </div>
  );
}
