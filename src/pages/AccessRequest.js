import React from "react";
import { TiTick } from "react-icons/ti";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const AccessRequest = () => {
  return (
    <div>
      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell">
            <p>Pending Request</p>
          </div>
          <div class="table-cell">
            <p>Accept Request</p>
          </div>
          <div class="table-cell last-cell">
            <p>Delete Request</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <TiTick size={25} />
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <TiTick size={25} />{" "}
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <TiTick size={25} />
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <TiTick size={25} />
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Raheja Hospital</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <TiTick size={25} />
            </p>
          </div>
          <div class="table-cell last-cell">
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
