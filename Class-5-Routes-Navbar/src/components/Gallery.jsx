// import React from 'react'

// const Gallery = () => {
//   return (
//     <div>Gallery</div>
//   )
// }

// export default Gallery;

import React from "react";
import "./Page.css";
import { FaImages } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="page">
      <div className="content">
        <h1>
          <FaImages className="icon" /> Gallery
        </h1>

        <p>
          Browse our collection of creative projects and modern web designs.
          Every project is built with attention to detail, responsive layouts,
          and interactive user experiences.
        </p>

        <button>View Gallery</button>
      </div>
    </div>
  );
};

export default Gallery;