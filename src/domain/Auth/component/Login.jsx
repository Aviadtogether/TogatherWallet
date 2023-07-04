import { useContext, useMemo } from "react";
import styled from "styled-components";
import Button from "../../../uikit/Button/Button";
import { UserContext } from "../../../store/userContext";
import { useNavigate } from "react-router-dom";
import SivanImage from "../../../assets/images/Mock/User/SivanImage.png";
import NaamaImage from "../../../assets/images/Mock/User/NaamaImage.jpeg";
const Wrapper = styled.div`
  /* margin-top: 45vh; */
`;

const Title = styled.div`
  color: #8fd9a8;
  font-size: 23px;
  font-style: normal;
  font-weight: 800;
  line-height: 18.989px;
  text-transform: uppercase;
  margin-top: 70px;
  text-align: center;
`;

const buttonStyles = {
  color: "#28B5B5",
  backgroundColor: "#ffffff",
  border: "2px solid #28B5B5",
  shadow: "0px 4px 10px 0px rgba(66, 132, 128, 0.20);",
  width: "144px",
  margin: "auto",
  padding: "12px 35px",
  borderRadius: "30px",
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8;
  margin-top: 150px;
`;

const StyledImage = styled.img`
  width: 100px;
  border-radius: 50%;
  cursor: pointer;
`;

function Login(props) {
  const { users, currentUser, setCurrentUser, setIsAuthenticated } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (currentUser !== {}) {
      setCurrentUser(users[0]);
      setIsAuthenticated(true);
      navigate("/");
    } else {
      setCurrentUser(users[1]);
      navigate("/");
    }
  };

  const login1 = () => {
    setCurrentUser(users[0]);
    setIsAuthenticated(true);
    navigate("/");
  };

  const login2 = () => {
    setCurrentUser(users[1]);
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <ImageWrapper>
        <StyledImage src={SivanImage} alt="" onClick={login1} />
        <StyledImage src={NaamaImage} alt="" onClick={login2} />
      </ImageWrapper>
      {/* <Button text={"Login"} styles={buttonStyles} action={handleLogin} /> */}
    </Wrapper>
  );
}

export default Login;
