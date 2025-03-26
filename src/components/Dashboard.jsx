import { useState } from "react";
import {
  Activity,
  Users,
  FileText,
  Calendar,
  AlertCircle,
  Menu,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom"; // Assuming you're using react-router
import Card from "./Card";

const Dashboard = () => {
  const [menu, setMenu] = useState(false);

  const recentPat = [
    { id: 1, name: "John Doe", age: 45, date: "2025-03-06" },
    { id: 2, name: "Jane Smith", age: 34, date: "2025-03-05" },
  ];

  const upcomings = [
    { id: 1, name: "John Doe", reason: "Routine Checkup", time: "10:00 AM" },
    {
      id: 2,
      name: "Jane Smith",
      reason: "Emergency Consultation",
      time: "11:00 AM",
    },
  ];

  const toggleMenu = () => setMenu(!menu);

  return (
    <section className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="p-4 border-b flex justify-between items-center gap-2 md:hidden">
          <div className="flex items-center justify-between gap-2">
            <Activity size={20} color="blue" />
            <h3 className="text-blue-700 font-bold text-[18px]">RuralCare</h3>
          </div>
          <div>
            <Menu size={15} className="md:hidden" onClick={toggleMenu} />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Dr. Johnson</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            New Patient
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Total Patients</h3>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-gray-500">+8 this week</p>
          </div>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Today's Appointments</h3>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-gray-500">6 remaining</p>
          </div>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Medical Records</h3>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <div className="text-2xl font-bold">3,642</div>
            <p className="text-xs text-gray-500">+42 this month</p>
          </div>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Critical Cases</h3>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-gray-500">-2 from last week</p>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div>
            <h2>Recent Patients</h2>
            <p>Latest patient registrations</p>
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
                      <p className="text-sm text-gray-500">
                        {patient.age} years old
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{patient.date}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Link to="/dashboard/patients">
                <button className="w-full">View All Patients</button>
              </Link>
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <h2>Upcoming Appointments</h2>
            <p>Scheduled for today</p>
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
                      <p className="text-sm text-gray-500">
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
                <button className="w-full">View All Appointments</button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
