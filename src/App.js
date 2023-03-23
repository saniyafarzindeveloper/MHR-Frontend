import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Insurance from "./pages/Insurance";
import Hospital from "./pages/Hospital";
import Doctor from "./pages/newDoctor";
import Patient from "./pages/newPatient";
import Footer from "./components/footer";
import UplodedFile from "./pages/UplodedFile";
import PatientProfile from "./pages/PatientProfile";
//import PatientDashBoard from "./pages/PatientDashBoard";
import AccessHistory from "./pages/AccessHistory";
import AccessRequest from "./pages/AccessRequest";
import DoctorProfile from "./pages/DoctorProfile";
import DocAccessList from "./pages/DocAccessList";
import InsuranceProfile from "./pages/InsuranceProfile";
import InsuranceAccessList from "./pages/InsuranceAccessList";
import HospitalProfile from "./pages/HospitalProfile";
import HospitalAccessList from "./pages/HospitalAccessList";
import LoginPage from "./pages/LoginPage";
//import UploadFiles from "./pages/UploadFiles";
//import UplodedFile from "./pages/UplodedFile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/login" exact element={<LoginPage />}></Route>
        <Route path="/doctor" exact element={<newDoctors />}></Route>
        {/* <Route path="/aboutus" element={<AboutUs />}></Route> */}
        <Route path="/" element={<Services />}></Route>
        <Route path="/newpatient" element={<Patient />}></Route>
        <Route path="/newdoctor" element={<Doctor />}></Route>
        <Route path="/insurance" element={<Insurance />}></Route>
        <Route path="/insurance-profile" element={<InsuranceProfile />}></Route>
        <Route path="/hospital" element={<Hospital />}></Route>
        <Route path="/uplodedFile" element={<UplodedFile />}></Route>
        <Route path="/patientprofile" element={<PatientProfile />}></Route>
        <Route path="/accesshistory" element={<AccessHistory />}></Route>
        <Route path="/accessrequest" element={<AccessRequest />}></Route>
        <Route path="/doctorprofile" element={<DoctorProfile />}></Route>
        <Route path="/doc-access-list" element={<DocAccessList />}></Route>
        <Route
          path="/insuranceprofile"
          element={<InsuranceProfile />}
        ></Route>
        <Route
          path="/insurance-access-list"
          element={<InsuranceAccessList />}
        ></Route>
        <Route path="/hospitalprofile" element={<HospitalProfile />}></Route>
        <Route
          path="/hospitalaccesslist"
          element={<HospitalAccessList />}
        ></Route>
        {/* <Route path="/uploadfiles" element={<UplodedFile />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
