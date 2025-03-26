import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import SideHome from "./components/SideHome"
import PatientsPage from "./pages/PatientsPage";
import DashPage from "./pages/DashPage";
import { createContext, useEffect, useState} from "react";
import RecordPage from "./pages/RecordPage";
import SettingsPage from "./pages/SettingsPage";
import PatientDetailPage from "./pages/PatientDetailPage";
import NewPatientPage from "./pages/NewPatientPage";
// import DashboardLayout from "./components/DashboardLayout";
export const userContext = createContext();

function App() {
  const [isClose, setIsClose] = useState(false);
  const [patient, setPatient] = useState([]);
  

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`http://localhost:4000/patient`);
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
  }, []);

  const closeBar = ()=>{
    setIsClose(prev => !prev)
  }


  return (
    <userContext.Provider value={{isClose, closeBar, patient}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/dash" element={<SideHome/>}>
            <Route index element={<DashPage/>}/>
            <Route path="/dash/patient" element={<PatientsPage/>}/>
            <Route path="/dash/record" element={<RecordPage/>}/>
            <Route path="/dash/settings" element={<SettingsPage/>}/>
            <Route path="/dash/patient/new" element={<NewPatientPage/>}/>
            <Route path="/dash/patient/:id" element={<PatientDetailPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>


    
  )
}

export default App
