
import { UserProvider } from "./UserContext";
import Profile from "./Profile";

function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}

export default App;