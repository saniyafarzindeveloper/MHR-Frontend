import React, { useState } from "react";
import "./patientNavbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const PatientNavbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          {/* <h2>
            <span>New Patient Login</span>
          </h2> */}
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <button>
              <NavLink to="/uplodedFile">View Uploded File</NavLink>
            </button>
            <button>
              <NavLink to="/accessHistory">View Access History</NavLink>
            </button>
          </ul>
        </div>

        {/* 3rd social media links */}
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default PatientNavbar;
