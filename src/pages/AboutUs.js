import React from "react";
import "./About.css";
// import aboutimg from "../images/about.jpg";
//import aboutUs from "../images/aboutUs.jpg"
import au from "../images/au.jpg"
import ehr from "../images/ehr.jpg"
// import { mainpic as pic } from "../images/about-img.svg";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">About Us</h1>

        {/* parent div - row */}
        <div className="row">
          <div className="image">
            <img src={ehr} alt="" width="700" height="550" />
          </div>

          <div className="about-content">
            <h3 className="about-tag-line">Keeping your health on track.</h3>
            <p>
              We take security and privacy very seriously, and we have
              implemented rigorous protocols to ensure that your information is
              kept safe.
            </p>
            <p>
              Our mission is to empower patients with the tools they need to
              take control of their health. Whether you're managing a chronic
              condition, undergoing treatment, or simply want to keep track of
              your health and wellness, Medical Health Record has got you
              covered.
              
            </p>
            {/* <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"></span>{" "}
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
