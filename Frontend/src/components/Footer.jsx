// import React from "react";
// import { Link } from "react-router-dom";
// import { FaLocationArrow, FaPhone } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";

// const Footer = () => {
//   const hours = [
//     {
//       id: 1,
//       day: "Monday",
//       time: "9:00 AM - 11:00 PM",
//     },
//     {
//       id: 2,
//       day: "Tuesday",
//       time: "12:00 PM - 12:00 AM",
//     },
//     {
//       id: 3,
//       day: "Wednesday",
//       time: "10:00 AM - 10:00 PM",
//     },
//     {
//       id: 4,
//       day: "Thursday",
//       time: "9:00 AM - 9:00 PM",
//     },
//     {
//       id: 5,
//       day: "Friday",
//       time: "9:00 PM - 9:00 PM",
//     },
//     {
//       id: 6,
//       day: "Saturday",
//       time: "9:00 AM - 3:00 PM",
//     },
//   ];

//   return (
//     <>
//       <footer className={"container"}>
//         <hr />
//         <div className="content">
//           <div>
//             <img src="/logo.png" alt="logo" className="logo-img"/>
//           </div>
//           <div>
//             <h4>Quick Links</h4>
//             <ul>
//               <Link to={"/"}>Home</Link>
//               <Link to={"/appointment"}>Appointment</Link>
//               <Link to={"/about"}>About</Link>
//             </ul>
//           </div>
//           <div>
//             <h4>Hours</h4>
//             <ul>
//               {hours.map((element) => (
//                 <li key={element.id}>
//                   <span>{element.day}</span>
//                   <span>{element.time}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4>Contact</h4>
//             <div>
//               <FaPhone />
//               <span>+91-9045116099</span>
//             </div>
//             <div>
//               <MdEmail />
//               <span>ashhar786rahman@gmail.com</span>
//             </div>
//             <div>
//               <FaLocationArrow />
//               <span>Kanpur, India</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col first" >
        <img src="/logo.png" alt="logo" className="logo" />
        <h4>Contact</h4>
        <p><strong>Address:</strong> Kanpur, UttarPradesh, India</p>
        <p><strong>E-mail:</strong> ashhar786rahman@gmail.com</p>
        <p><strong>Hours:</strong> 10:00 - 18:00 Mon-Sat</p>
        {/* <div className="follow">
          <h4>Follow</h4>
          <div className="icon">
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href=""><i className="fa-brands fa-github"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div> */}
      </div>

      <div className="col">
        <h4>About</h4>
        <Link to="about">About us</Link>
        {/* <Link to="">Delivery Information</Link> */}
        <Link to="">Privacy Policy</Link>
        <Link to="">Terms & Conditions</Link>
        <Link to="">Contact</Link>
      </div>

      <div className="col"> 
        <h4>My Account</h4>
        <Link to="/login">Sign In</Link>
        <Link to="/UserPage">View Appointment</Link>
        <Link to="">My Wishlist</Link>
        {/* <Link to="">Track My Order</Link> */}
        <Link to="">Help</Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store Or Google Play Store</p>
        <div className="row">
          <img src="/app.jpg" alt="" />
          <img src="play.jpg" alt="" />
        </div>
        <p>Secured Payment Gateway</p>
        <img src="pay.png" alt="" />
      </div>

      <div className="copyright">
        <p>Copyright © 2010-2023 Freepik Company S.L. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
