
//useNaviagte
import React from 'react'

import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>

      <button onClick={() => navigate("/about")}>
        Go to About
      </button>
    </>
  );
}

function About() {
  const navigate = useNavigate(0);

  return(<>
  <h1>About Page</h1>

  <button onClick={() => navigate("-1")}> 
    Go Back
  </button>
  
  </>);
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
