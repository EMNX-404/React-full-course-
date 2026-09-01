import "./App.css";
import Home from "./components/Home";
import UserContext from "./context/UserContext";

function App() {
  const username = "Eman";

  return (
    <UserContext.Provider value={username}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
