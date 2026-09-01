
import { useState, } from "react";
import useCounter from "./useCounter";
import "./App.css";

function App() {
  const [use, increament , decreament] = useCounter


  return(
           <div>
            <h2>{count}</h2>
            <button type="button" className="btn btn-primary" onClick={increament}>increament</button>

             <button type="button" className="btn btn-primary" onClick={decreament}>decreament </button>
           </div>
  )
}

export default App;
