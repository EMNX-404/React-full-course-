// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About;

import React from "react";
import "./Page.css";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className="page">
      <div className="content">
        <h1>
  <FaReact className="icon" /> About Us
</h1>
        <p>
          Welcome to our React website. We are passionate about creating
          beautiful, modern, and responsive web applications using the latest
          technologies. This page demonstrates simple routing with a stylish UI.
        </p>

        <button>Learn More</button>
      </div>
    </div>
  );
};

export default About;