import { BrowserRouter, Routes as RoutesWrapper } from "react-router-dom";
import Navbar from "./domain/Common/Navbar";
import styled from "styled-components";
import { UserProvider } from "./store/userContext";
import Main from "./domain/Common/Layout/Main/Main";

const Wrapper = styled.div`
  padding-bottom: 80px;
`;

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Wrapper>
          <Main />
          <Navbar />
        </Wrapper>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
