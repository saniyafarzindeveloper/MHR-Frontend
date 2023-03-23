import React from "react";
// import PatientNavbar from "../components/patientNavbar";
import "./NewPateint.css";
const newPatient = () => {
  return (
    <>
      <section id="registration-page">
        <form class="signup-form">
          {/* <!-- FORM HEADER --> */}
          <div class="form-header">
            <h1>Sign Up as a New Patient</h1>
          </div>
          {/* <!-- FORM BODY --> */}
          <div class="form-body">
            {/* <!-- First name & Last name --> */}
            <div class="row">
              <div class="input-group">
                <label>Name </label>
                <input
                  required
                  type="text"
                  placholder="Enter your first name"
                />
              </div>
            </div>
            {/* <!-- Email --> */}
            <div class="row">
              <div class="input-group">
                <label>Email </label>
                <input
                  required
                  type="email"
                  placholder="Enter your email address"
                />
              </div>
            </div>
            <div class="row">
              <div class="input-group">
                <label>Contact No. </label>
                <input required type="text" placholder="Enter your No." />
              </div>
              <div class="input-group">
                <label>Alternate Contact No.</label>
                <input required type="text" placholder="Enter your no." />
              </div>
            </div>
            {/* <!-- Gender & Hobbies --> */}
            <div class="row">
              <div class="input-group">
                <label>Gender </label>

                <div class="radio-group">
                  <div>
                    <label for="male">
                      <input type="radio" name="gender" id="male" />
                      Male
                    </label>
                  </div>

                  <div>
                    <label for="female">
                      <input type="radio" name="gender" id="female" />
                      Female
                    </label>
                  </div>

                  <div>
                    <label for="other">
                      <input type="radio" name="gender" id="other" /> Other
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Upload Profile Picure & Age --> */}
            <div class="row">
              <div class="input-group">
                <label>Upload Profile Picture</label>
                <input type="file" />
              </div>
              <div class="input-group">
                <label>Age</label>
                <input required type="number" />
              </div>
            </div>

            {/* <!--  Bio   --> */}
            <div class="row">
              <div class="input-group">
                <label for="">Medical History</label>
                {/* <textarea placeholder="Tell us more about ur past medical history">
                  {" "}
                </textarea> */}
                <textarea placeholder="Tell us more about ur past medical history"></textarea>
              </div>
            </div>
          </div>
          {/* <!--  FORM FOOTER   --> */}
          <div class="form-footer">
            <button class="patient-btn">
              <a href="/patientprofile">Create</a>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default newPatient;
