// import React from 'react'

// const Services = () => {
//   return (
//     <div>Services</div>
//   )
// }

// export default Services;

import React from "react";
import "./Page.css";
import { FaTools } from "react-icons/fa";

const Services = () => {
  return (
    <div className="page">
      <div className="content">
        <h1>
          <FaTools className="icon" /> Our Services
        </h1>

        <p>
          We provide modern web development, responsive website design, React
          applications, UI/UX improvements, and professional solutions to help
          businesses grow online.
        </p>

        <button>Our Services</button>
      </div>
    </div>
  );
};

export default Services;