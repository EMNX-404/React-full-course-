import React from 'react'
import Child3 from './Child3'

const Child2 = ({username}) => {
  return (
    <div>
        <h1>Child-2</h1>
          <Child3 username={username}/>
      
    </div>
  )
}

export default Child2
