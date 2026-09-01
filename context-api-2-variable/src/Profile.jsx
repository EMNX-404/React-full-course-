
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { userName, userAge, userContact } = useContext(UserContext);

  return (
    <div>
      <h1>Name: {userName}</h1>
      <h1>Age: {userAge}</h1>
      <h1>contact: {userContact}</h1>
    </div>
  );
}

export default Profile;