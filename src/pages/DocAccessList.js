import React from "react";
import "../pages/commonAccessList.css";
export default function DocAccessList() {
  return (
    <div className="table-wrapper">
     <div>
        {/* <label for="file" className="files-style">Add new:</label>
        <input type="file" className="files" multiple /> */}
        <button className="add-new" >Add new</button>
      </div>
      <table border="1">
        <tr>
          <th>Patient Name</th>
        </tr>
        <tr>
          <td>Ramesh Raman</td>
        </tr>
        <tr>
          <td>Daisy</td>
        </tr>
        <tr>
          <td>Ritika Rajan</td>
        </tr>
        <tr>
          <td>Rupam Sheth</td>
        </tr>
      </table>

     
    </div>
  );
}
