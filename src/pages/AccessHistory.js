import React from "react";
// import '../pages/accessHistory.css'
import { AiFillDelete } from "react-icons/ai";

const AccessHistory = () => {
  return (
    <div className="acc-hist-wrapper" >
      <div className="table-box">
        <div className="table-row table-head">
          <div className="table-cell first-cell">
            <p>Request granted</p>
          </div>
          <div className="table-cell">
            <p>Revoke access</p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>Insurance Company</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>JJ Hospital</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>Dr. Shekhani</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>Insurance Company</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>LIC</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessHistory;
