// import React from "react";
// import "./footer.css";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faFacebookF,
// //   faInstagram,
// //   faLinkedin,
// // } from "@fortawesome/free-brands-svg-icons";
// // import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// const footer = () => {
//   return (
//     <div>
//       <footer class="footer">
//         <div class="container">
//           <div class="row">
//             <div class="footer-col">
//               {/* <ul>
//                 <li>
//                   <a href="#">about us</a>
//                 </li>
//                 <li>
//                   <a href="#">our services</a>
//                 </li>
//                 <li>
//                   <a href="#">privacy policy</a>
//                 </li>
//                 <li>
//                   <a href="#">affiliate program</a>
//                 </li>
//               </ul> */}
//               <ul>
//                 <li>
//                   <a href="#home">Home</a>
//                 </li>
//                 <li>
//                   <a href="#news">About Us</a>
//                 </li>
//                 <li>
//                   <a href="#contact">Services</a>
//                 </li>
//               </ul>
//             </div>

//             {/* <div class="footer-col">
//               <h4>follow us</h4>
//               <div class="social-links">
//                 <a href="#">
//                   <FontAwesomeIcon icon={faFacebookF}> </FontAwesomeIcon>
//                 </a>
//                 <a href="#">
//                   <FontAwesomeIcon icon={faTwitter}> </FontAwesomeIcon>
//                 </a>
//                 <a href="#">
//                   <FontAwesomeIcon icon={faInstagram}> </FontAwesomeIcon>
//                 </a>
//                 <a href="#">
//                   <FontAwesomeIcon icon={faLinkedin}> </FontAwesomeIcon>
//                 </a>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default footer;

import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <ul className="footer-ul">
          <li className="footer-li">
            <a href="/">Home</a>
          </li>
          <li className="footer-li">
            <a href="/">About Us</a>
          </li>
          <li className="footer-li">
            <a href="/">Services</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
