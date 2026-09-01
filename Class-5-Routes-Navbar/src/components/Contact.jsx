// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact;
import React from "react";
import "./Page.css";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="page">
      <div className="content">
        <h1>
          <FaEnvelope className="icon" /> Contact Us
        </h1>

        <p>
          We'd love to hear from you! Whether you have questions, feedback, or
          a project idea, feel free to get in touch. Our team is always ready to
          assist you.
        </p>

        <button>Contact Now</button>
      </div>
    </div>
  );
};

export default Contact;