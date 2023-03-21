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
        <div className="  mobile-menu-link">
          <div className="styleit">
            <ul
              className="ul-style"
              style={{
                display: "flex",
                alignItems: "center",
                width: "800px",
                marginLeft: "330px",
              }}
            >
              <button className="btnn">
                <NavLink>View Uploded File</NavLink>
              </button>
              <button className="btnn">
                <NavLink to="/accessHistory">View Access History</NavLink>
              </button>

              <button className="btnn">
                <NavLink to="/accessrequest">View Access Request</NavLink>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PatientNavbar;
