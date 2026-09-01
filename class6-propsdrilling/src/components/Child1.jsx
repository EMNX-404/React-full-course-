import React from 'react'
import Child2 from './Child2'

const Child1 = ({username}) => {
  return (
    <div>
        <h1>Child-1</h1>
        <Child2 username={username}/>
      
    </div>
  )
}

export default Child1
