import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const[count,setcount]=useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
    setCount ((count) => count + 1);
  },[]);
  return (
<button onClick={handleClick}>
   count: {count}
</button>
  );
}

export default App;
