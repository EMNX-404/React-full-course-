import { useState, useEffect } from "react";
import './App.css';
//importing axios
import axios from"axios";

function App() {
  //state hook syntax
   const [users, setUsers] = useState([]);
   useEffect(() =>{
    //getting data from backend through route but its example
    axios.get("http://localhost:3000/api/users")
    //its like if and else if user data found then keep user in response.data
    .then((response) =>{
      setUsers(response.data);

    })
    //and if not found then show error
      .catch((error)=>{
        console.log(error)
      
    })
  
    //dependency array
   },[])
  return (
        <div>
      <h1>Users</h1>
      {/* key gives React a unique identity */}

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  )
    
}

export default App;
