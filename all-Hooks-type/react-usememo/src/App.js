// usememo code

import { useMemo , useState } from 'react';
import './App.css';
import React from 'react'

const App = () => {
  const [count , setcount]= useState(0)

  const result = useMemo(() => {
    console.log("calculation")
    return 10+20
  }, [])

  return (
    
    <div>
      <h2> useMemo Example</h2>
      <h3>result : {result}</h3>
      <h3>Count : {count}</h3>

      <button onClick={() => setcount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default App
