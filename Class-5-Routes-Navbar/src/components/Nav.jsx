// import React from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// import Home from "./Home";
// import About from "./About";
// import Gallery from "./Gallery";
// import Services from "./Services";
// import Contact from "./Contact";

// const Nav = () => {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/gallery">Gallery</Link> |{" "}
//         <Link to="/services">Services</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Nav;


import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";
import Contact from "./Contact";

import "../Nav.css";

const Nav = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo">ReactApp</div>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Nav;