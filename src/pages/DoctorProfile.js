import React from "react";
import "../pages/commonProfile.css";
export default function DoctorProfile() {
  return (
    <div className="dpwrapper">
      <h1 className="wlc" >Welcome!</h1>
      <h2 className="dr-name" >
        Name: Dr. Aziz Iqbal
      </h2>
      <h2 className="gen" >
        Gender: Male
      </h2>
      <h2 className="deg" >
        Degree: MBBS
      </h2>
      <h2 className="spc" >
        Speciality: ENT
      </h2>
      <button className="my-btn" >
        <a href="/doc-access-list" >View access list</a>
      </button>
      {/* <button className="btndp" >
      <a className="btndp" href="/doc-access-list">View access list</a>
      </button> */}
    </div>
  );
}
