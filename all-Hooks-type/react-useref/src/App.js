import { useState,useRef } from 'react';
import './App.css';
import react from 'react';

function App() {
  const countRef =useRef (0);
  const [count , setcount] = useState(0);
  return( 
    <div>
      <h3>Ref:{countRef.current}</h3>
       <h3>count:{count}</h3>

       <button 
       type="button"
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}>
          Ref
        </button>

        <button 
       type="button"
        onClick={() => {
         setcount(count + 1);
        }}>
          Count
        </button>
    </div>

  );

  
}

export default App;
