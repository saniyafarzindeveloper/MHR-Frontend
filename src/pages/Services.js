import React from "react";
import "./services.css";
const Services = () => {
  return (
    <div
      className="services"
      style={{
        height: "60vh",
        backgroundImage: "none",
      }}
    >
      <h1 className="services-heading">Our services include the following</h1>
      <div className="services-container">
      <div className="service">
        <h3>Immutable and Efficient Report Format</h3>
        <p>Standard for patients at all medical institutions using blockchain for medical health reports.</p>
      </div>
      <div className="service">
        <h3>Patient Centric Access and Data Confidentiality</h3>
        <p>Patient access control ensures medical information privacy.</p>
      </div>
      <div className="service">
        <h3>Access Relevant KPIs and Metrics of Medical Institution</h3>
        <p>Maximizing healthcare efficiency requires monitoring bed occupancy, equipment use, drug and treatment costs etc.</p>
      </div>
    </div>
    <div className="services-container">
      <div className="service">
        <h3>Informative Dashboards</h3>
        <p>Patient dashboard provides individuals tailored advice, expenditure and patient well being</p>
      </div>
      <div className="service">
        <h3>Enhanced communication and operational efficiency</h3>
        <p>Our application promotes enhanced communication among diverse healthcare teams to ensure excellent patient care.</p>
      </div>
      <div className="service">
        <h3>Disease monitoring</h3>
        <p>Improved management and decision making for potential disease outbreaks.</p>
      </div>
    </div>
    </div>
  );
};

export default Services;
