import React from 'react'
// import '../pages/commonProfile.css'

import '../pages/insuranceProfile.css'
export default function InsuranceProfile() {
  return (
   <div className='ins-prof-wrapper' >
    <h1 className='ins-wlc' >Welcome!</h1>
    <h2 className="insu-name" >
        Name: LIC
      </h2>
      <h2 className="address" >
        Address: Chinchpokli, 1st lane.
      </h2>
      <h2 className="contact" >
        Contact Number: +91 234567891
      </h2>
      <button className="insu-prof-btn" >
        <a href="/insurance-access-list" >View access list</a>
      </button>
   </div>
  )
}
