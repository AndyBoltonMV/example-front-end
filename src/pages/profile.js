import { useState } from "react";
import { Navigate } from "react-router-dom";
import { updateUser, deleteUser } from "../utils";

export const Profile = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const updateHandler = (e) => {
    e.preventDefault();
    updateUser({ username, email, pass }, setUser);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    deleteUser(setUser);
  };

  return (
    <div>
      {!user && <Navigate to="/" />}
      <form onSubmit={updateHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="New Username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="New Email"
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="New Password"
          type="password"
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={deleteHandler}>Delete Profile</button>
    </div>
  );
};
