import { Link } from "react-router-dom";
import { Button } from "../globalStyles";

export const Navbar = ({ user, setUser, isLight, setIsLight }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/feed">Home</Link>
        </li>
        <li>
          <Link to={`/${user}`}>{user}</Link>
        </li>
      </ul>
      <Button
        isLight={isLight}
        onClick={() => {
          setUser();
          localStorage.removeItem("myToken");
        }}
      >
        Log Out
      </Button>
      <Button isLight={isLight} onClick={() => setIsLight(!isLight)}>
        {isLight ? "Dark Mode" : "Light Mode"}
      </Button>
    </nav>
  );
};
