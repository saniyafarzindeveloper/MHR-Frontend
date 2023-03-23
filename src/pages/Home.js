import React from "react";
import "./Home.css";
import AboutUs from "./AboutUs";
import Service from "./Services";
import { HashLink } from "react-router-hash-link";
const Home = () => {
  function loginalert() {
    alert("Redirecting to login page");
  }

  function signalert() {
    alert("Redirecting to sign page");
  }
  return (
    <>
      <div
        className="App"
        style={{
          height: "90vh",
        }}
      >
        <div className="contentt">
          <h1 className="h1">Your health, your data, your control.</h1>
          <p className="details">
          Welcome to Medical Health Record, a platform dedicated to helping you manage your health information efficiently and securely. We understand that keeping track of medical records and personal health information can be challenging, and that's why we've created a solution that simplifies the process for you.
          </p>

          <button
            onClick={() =>
              window.scrollBy({
                top: 700,
                left: 0,
                behavior: "smooth",
              })
            }
            className="know-more-btn"
          >
            Know more
          </button>
        </div>
      </div>
      <AboutUs />
      <Service />
    </>
  );
};

export default Home;
