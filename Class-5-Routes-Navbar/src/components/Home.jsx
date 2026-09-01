// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home;

import React from "react";
import "./Page.css";
import { FaHome } from "react-icons/fa";

const Home = () => {
  return (
    <div className="page">
      <div className="content">
        <h1>
          <FaHome className="icon" /> Welcome Home
        </h1>

        <p>
          Welcome to our modern React website. Explore beautiful UI designs,
          smooth navigation, and responsive layouts built with React and CSS.
          Start your journey by exploring the pages using the navigation bar.
        </p>

        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Home;