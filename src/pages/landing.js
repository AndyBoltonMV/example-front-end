import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { fetchUser } from "../utils";

export const Landing = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [isLog, setIsLog] = useState(true);

  useEffect(() => {
    if (localStorage.key("myToken")) {
      fetchUser({}, setUser);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    isLog
      ? fetchUser({ username, pass }, setUser)
      : fetchUser({ username, email, pass }, setUser);
  };

  return (
    <div>
      {user && <Navigate to="/feed" />}
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {!isLog && (
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        )}
        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">{isLog ? "Log In" : "Sign Up"}</button>
      </form>
      <button onClick={() => setIsLog(!isLog)}>
        {isLog ? "Dont have" : "Already have"} an account?
      </button>
    </div>
  );
};
