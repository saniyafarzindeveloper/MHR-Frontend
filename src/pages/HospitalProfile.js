import React from 'react'
// import '../pages/commonProfile.css'

import '../pages/hospitalProfile.css'

export default function HospitalProfile() {
  return (
   <div className='hos-wrapper' >
    <h1 className='hosp-wlc' >Welcome!</h1>
    <h2 className="hosp-name" >
        Name: Leelavati Hospital
      </h2>
      <h2 className="hosp-address" >
        Address: Carter road, Mumbai
      </h2>
      <h2 className="hosp-contact" >
        Contact Number: +91 7777777
      </h2>
      <button className="hosp-prof-btn" >
        <a href="/insurance-access-list" >View access list</a>
      </button>
   </div>
  )
}
