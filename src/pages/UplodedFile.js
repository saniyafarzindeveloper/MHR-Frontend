import React from "react";
import "./UplodedFile.css";
// import { AiFillEye } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
const UplodedFile = () => {
  return (
    <div className="uploaded-files-wrapper">
      <div className="input-file-wrapper" >
        <label className="label-file" for="myfile">
          Upload a new file
        </label>
        <input type="file" className="upload-new-file" multiple />
      </div>

      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell">
            <p>Previos Existing File</p>
          </div>
          <div class="table-cell">
            <p>Uploaded On</p>
          </div>
          <div class="table-cell last-cell">
            <p>View</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Heart Disease</p>
          </div>
          <div class="table-cell">
            <p>12/07/2022</p>
          </div>
          <div class="table-cell last-cell">
            <p>
              <AiFillEye />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Heart Disease</p>
          </div>
          <div class="table-cell">
            <p>12/07/2022</p>
          </div>
          <div class="table-cell last-cell">
            <p>
              <AiFillEye />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Heart Disease</p>
          </div>
          <div class="table-cell">
            <p>12/07/2022</p>
          </div>
          <div class="table-cell last-cell">
            <p>
              <AiFillEye />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Heart Disease</p>
          </div>
          <div class="table-cell">
            <p>12/07/2022</p>
          </div>
          <div class="table-cell last-cell">
            <p>
              <AiFillEye />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Heart Disease</p>
          </div>
          <div class="table-cell">
            <p>12/07/2022</p>
          </div>
          <div class="table-cell last-cell">
            <p>
              <AiFillEye />
            </p>{" "}
          </div>
        </div>
        {/* <button type="file" className="button">Upload New Files</button> */}
      </div>
    </div>
  );
};

export default UplodedFile;
