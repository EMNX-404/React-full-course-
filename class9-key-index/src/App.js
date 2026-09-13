import react from "react";
import './App.css';

function App() {

  const users = [ { id: 101, name: "Ali", email: "ali@gmail.com", }, { id: 102, name: "Ahmed", email: "ahmed@gmail.com", }, { id: 103, name: "Sara", email: "sara@gmail.com", }, { id: 104, name: "Ayesha", email: "ayesha@gmail.com", }, ];
  return (
    //key for identity 
    //index for position
    //.map is for get data change and return
    <h1>user list</h1>
    //.map get data para user and index
    {user.map((user , index) =>(
      //telling id to be unique
      <div key={user.id}>
        <h2>
    //telling index to be increased
          {index +1}.{user.name}
        </h2>
        <p>Email:{user.email}</p>
      </div>
    ))}

  );
}

export default App;
