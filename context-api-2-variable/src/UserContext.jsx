UserContext.jsx
import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const userName = "John";
  const userAge = 25;
  const userContact = 12345;

  return (
    <UserContext.Provider value={{ userName, userAge , userContact}}>
      {children}
    </UserContext.Provider>
  );
}
