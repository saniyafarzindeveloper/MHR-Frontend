import React from "react";
import "./NewDoctor.css";
const Doctor = () => {
  return (
    <>
      <section id="registration-page">
        <form class="signup-form">
          {/* <!-- FORM HEADER --> */}
          <div class="form-header">
            <h1>Sign Up as a New Doctor</h1>
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
                <input required type="number" placholder="Enter your No." />
              </div>
              <div class="input-group">
                <label>Age</label>
                <input required type="number" />
              </div>
            </div>
            {/* <!-- Gender --> */}
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

                <div class="row">
                  <div class="input-group">
                    <label>Degree </label>
                    <input
                      required
                      type="text"
                      placholder="Enter your Degree"
                    />
                  </div>
                  <div class="input-group">
                    <label>Speciality</label>
                    <input required type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--  FORM FOOTER   --> */}
          <div class="form-footer">
            <button class="doc-btn">
              <a href="/doctorprofile">Create</a>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Doctor;
