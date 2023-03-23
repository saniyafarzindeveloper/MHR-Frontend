import React from "react";
import PatientNavbar from "../components/patientNavbar";
import UplodedFile from "./UplodedFile";
const PatientDashBoard = () => {
  return (
    <>
      <div>
        <PatientNavbar />
        <UplodedFile />
      </div>
    </>
  );
};

export default PatientDashBoard;
