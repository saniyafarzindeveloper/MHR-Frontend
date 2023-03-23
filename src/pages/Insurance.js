import React from "react";
import "./insurance.css";
const Insurance = () => {
  return (
    <>
      <section id="registration-page">
        <form class="signup-form">
          {/* <!-- FORM HEADER --> */}
          <div class="form-header">
            <h1>Sign Up as an Insurance Company</h1>
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
            </div>
            {/* <!-- Gender & Hobbies --> */}
            <div class="row">
              <div class="input-group">
                <div class="row">
                  <div class="input-group">
                    <label>Address</label>
                    <input required type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--  FORM FOOTER   --> */}
          <div class="form-footer">
            <button class=" insu-btn">
              <a href="/insuranceprofile">Create</a>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Insurance;
