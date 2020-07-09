import React, { useState, useEffect } from "react";
import { GlobalStyle, MainContainer } from "./components/StyledComponents";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Boards from "./components/Boards";

function App() {
  const [currentPage, setCurrentPage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user_session = sessionStorage.getItem("user");
    if (user_session) {
      setUser(JSON.parse(user_session));
      setCurrentPage("boards");
    } else {
      setCurrentPage("login");
    }
  }, []);

  return (
    <MainContainer>
      <GlobalStyle />
      {currentPage === "login" ? (
        <Login setCurrentPage={setCurrentPage} setUser={setUser} />
      ) : null}
      {currentPage === "sign-up" ? (
        <SignUp setCurrentPage={setCurrentPage} setUser={setUser} />
      ) : null}
      {currentPage === "profile" ? (
        <Profile
          setCurrentPage={setCurrentPage}
          setUser={setUser}
          user={user}
        />
      ) : null}
      {currentPage === "boards" ? (
        <Boards setCurrentPage={setCurrentPage} user={user} />
      ) : null}
    </MainContainer>
  );
}

export default App;
