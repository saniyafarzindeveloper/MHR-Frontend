import React from "react";
import { TiTick } from "react-icons/ti";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const AccessRequest = () => {
  return (
    <div className="acc-req-wrapper" >
      <div className="table-box">
        <div className="table-row table-head">
          <div className="table-cell first-cell">
            <p>Pending Request</p>
          </div>
          <div className="table-cell">
            <p>Accept Request</p>
          </div>
          <div className="table-cell last-cell">
            <p>Delete Request</p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <TiTick size={25} />
            </p>
          </div>
          <div className="table-cell last-cell">
            <p>
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <TiTick size={25} />{" "}
            </p>
          </div>
          <div className="table-cell last-cell">
            <p>
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <TiTick size={25} />
            </p>
          </div>
          <div className="table-cell last-cell">
            <p>
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <TiTick size={25} />
            </p>
          </div>
          <div className="table-cell last-cell">
            <p>
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div className="table-cell">
            <p>
              {" "}
              <TiTick size={25} />
            </p>
          </div>
          <div className="table-cell last-cell">
            <p>
              <AiFillDelete />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessRequest;
