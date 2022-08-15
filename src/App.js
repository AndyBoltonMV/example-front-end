import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./components/navbar";
import { Landing } from "./pages/landing";
import { Feed } from "./pages/feed";
import { Profile } from "./pages/profile";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (props.isLight ? "#fff" : "#222")};
`;

const App = () => {
  const [isLight, setIsLight] = useState(true);
  const [user, setUser] = useState();

  return (
    <AppContainer isLight={isLight}>
      {user && (
        <Navbar
          user={user}
          setUser={setUser}
          isLight={isLight}
          setIsLight={setIsLight}
        />
      )}
      <Routes>
        <Route path="/" element={<Landing user={user} setUser={setUser} />} />
        <Route path="/feed" element={<Feed user={user} />} />
        <Route
          path={`/${user}`}
          element={<Profile user={user} setUser={setUser} />}
        />
      </Routes>
    </AppContainer>
  );
};

export default App;
