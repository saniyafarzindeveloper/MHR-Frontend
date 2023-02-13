import React from "react";
import "./Home.css";
import AboutUs from "./AboutUs";
import Service from "./Services";
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
          <h1 className="h1">Virtual healthcare for you</h1>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum
            doloribus error voluptatum. Facilis, numquam? Minus aut harum,
            dolore quas in ipsam ut perferendis Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vel illum doloribus error voluptatum.
            Facilis, numquam? Minus aut harum, dolore quas in ipsam ut
            perferendis
          </p>

          <button onClick={signalert} className="reg">
            LogIn
          </button>
        </div>
      </div>
      <AboutUs />
      <Service />
    </>
  );
};

export default Home;
