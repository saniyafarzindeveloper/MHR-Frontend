import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Insurance from "./pages/Insurance";
import Doctor from "./pages/newDoctor";
import Patient from "./pages/NewPatient";
import Footer from "./components/footer";
import PatientNavbar from "./components/patientNavbar";
import UplodedFile from "./pages/UplodedFile";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/doctor" exact element={<newDoctors />}></Route>
        {/* <Route path="/aboutus" element={<AboutUs />}></Route> */}
        <Route path="/services" element={<Services />}></Route>
        <Route path="/newpatient" element={<Patient />}></Route>
        <Route path="/newdoctor" element={<Doctor />}></Route>
        <Route path="/insurance" element={<Insurance />}></Route>
        <Route path="/uplodedFile" element={<UplodedFile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
