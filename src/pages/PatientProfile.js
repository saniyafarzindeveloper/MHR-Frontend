import React from "react";
import "../pages/patientProfile.css";

export default function PatientProfile() {
  return (
    <div className="pat-prof-wrapper">
      <button className="btn1">
        <a href="/accesshistory">View access history</a>
      </button>
      <button className="btn2">
        <a href="/accessrequest">View access requests</a>
      </button>
      <button className="btn3">
        <a href="/uplodedFile">View uploaded files</a>
      </button>

      <h1 className="pat-wlc">Welcome!</h1>

      <h2 className="pat-name">Name: Alaya Zikri</h2>
      <h2 className="pat-no">Contact number: +91 567898543</h2>
      <h2 className="pat-alt-no">Alternate contact number: +91 98765432</h2>
      <h2 className="pat-gen">Gender: Female</h2>
      <h2 className="pat-age">Age: 56</h2>
      <p className="med-hist">
        Medical History: Sufferring from migraine since 22 years
      </p>
    </div>
  );
}
