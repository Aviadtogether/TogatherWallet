import { useContext } from "react";
import styled from "styled-components";
import Logout from "../../assets/images/Auth/Logout.png";
import { UserContext } from "../../store/userContext";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 10px;
  position: relative;
`;

const StyledTitle = styled.div`
  font-family: "Assistant";
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 28px;

  text-align: center;

  color: #007897;
`;

const LogoutImage = styled.img`
  position: absolute;
  width: 20px;
  cursor: pointer;
  right: 7px;
  top: 7px;
`;

function Title(props) {
  const { title } = props;
  const { setCurrentUser, setIsAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser({});
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <LogoutImage src={Logout} alt="" onClick={handleLogout} />
    </Wrapper>
  );
}

export default Title;
