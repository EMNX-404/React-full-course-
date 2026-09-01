import { useContext } from "react";
import UserContext from "../context/UserContext";

function Home() {
  const username = useContext(UserContext);

  return (
    <div>
      <h1>Home Component</h1>
      <h2>Username: {username}</h2>
    </div>
  );
}

export default Home;