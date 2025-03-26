import { Users, FileText, AlertCircle, UserPlus, Calendar } from "lucide-react";

import { Link } from "react-router-dom";
import "/data/pat.js";
import "/data/appoint.js";
import Card from "../components/Card";
import { recentPat } from "../../data/pat";
import { upcomings } from "../../data/appoint";
// import { useContext } from "react";
// import { userContext } from "../App";
import TopRural from "../components/TopRural";
// import { useNavigate } from "react-router-dom";

function DashPage() {
  // const { closeBar } = useContext(userContext);
  // const navigate = useNavigate();

  // const redirectPatient = () =>{
  //   navigate('/dash/patient');
  // }

  return (
    <section className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* <div className="p-4 border-b flex justify-between items-center gap-2 md:hidden">
          <div className="flex items-center justify-between gap-2">
            <Activity size={20} color="blue" />
            <h3 className="text-blue-700 font-bold text-[18px]">RuralCare</h3>
          </div>
          <div>
            <Menu size={15} className=" md:hidden" onClick={closeBar} />
          </div>
        </div> */}
        <TopRural />

        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
          <p className="text-muted-foreground text-lg ">
            Welcome back, Dr. Johnson
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/dash/patient/new">
            <button className="flex items-center gap-2 bg-indigo-700 rounded-md py-3 px-4 hover:bg-indigo-600 transition
            duration-300 ease-in-out text-white">
              <UserPlus className="h-4 w-4" />
              New Patient
            </button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Total Patients</h3>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+8 this week</p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Today's Appointments</h3>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">6 remaining</p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Medical Records</h3>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <div className="text-2xl font-bold">3,642</div>
            <p className="text-xs text-muted-foreground">+42 this month</p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Critical Cases</h3>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">-2 from last week</p>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="mb-4 space-y-2">
            <h2 className="font-semibold text-3xl">Recent Patients</h2>
            <p className="text-gray-400 text-lg">
              Latest patient registrations
            </p>
          </div>
          <div>
            <div className="space-y-4">
              {recentPat.map((patient) => (
                <div
                  key={patient.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {patient.age} years old
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {patient.date}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Link to="/dash/patient">
                <button className="w-full border p-2 rounded-md font-medium">
                  View All Patients
                </button>
              </Link>
            </div>
          </div>
        </Card>

        <Card>
          <div className="mb-4 space-y-2">
            <h2 className="font-semibold text-3xl">Upcoming Appointments</h2>
            <p className="text-gray-400 text-lg">Scheduled for today</p>
          </div>
          <div>
            <div className="space-y-4">
              {upcomings.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{appointment.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.reason}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{appointment.time}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Link to="/dashboard/appointments">
                <button className="w-full  border p-2 rounded-md font-medium">
                  View All Appointments
                </button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default DashPage;
