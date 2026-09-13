
import Profile from "./Profile";
import { createContext } from "react";
const username = "eman";
const age = 18;
const Data = createContext();
const Data1 = createContext();

function App() {
  return (
    <Data1.Provider value ={age}>
      <Data.Provider value={username}>
        <Profile />
      </Data.Provider>
    </Data1.Provider>
  );
}
export { Data,Data1 };
export default App;

