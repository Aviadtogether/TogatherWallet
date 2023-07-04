import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import QRCode from "../../../assets/images/Mock/Home/QRCode";
import { UserContext } from "../../../store/userContext";

const Wrapper = styled.div`
  display: flex;
  width: 343px;
  height: 157px;
  margin: auto;
  border: 0.5px solid #8bdc8e;
  border-radius: 21.9016px;
  margin-top: 20px;
`;

const LeftSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledImage = styled.img`
  width: 117px;
  height: 115px;
  text-align: center;
  border-radius: 21.9016px;
`;

const More = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  text-decoration-line: underline;
  color: #4b778d;
  cursor: pointer;
`;

const RightSide = styled.div`
  width: 60%;
`;

const InfoWrapper = styled.div`
  text-align: center;
`;

const Name = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 17.5px;
  color: #4b778d;
  margin-top: 15px;
`;

const City = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #4b778d;
  margin-top: 5px;
  margin-bottom: 13px;
`;

const WalletWrapper = styled.div`
  display: flex;
`;
const Credit = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  align-items: center;
  margin-left: 18px;
`;
const CreditName = styled.div`
  color: #4b778d;
`;
const CreditValue = styled.div`
  color: #ef7300;
  margin-left: 3px;
`;

const CreditQR = styled.div`
  margin-left: 45px;
`;

function UserCard(props) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    // navigate("/profile");
  };

  return (
    <Wrapper>
      <LeftSide>
        <StyledImage src={currentUser.properties.image} alt="" />
        <More onClick={handleNavigate}>More&gt;</More>
      </LeftSide>
      <RightSide>
        <InfoWrapper>
          <Name>{currentUser.properties.name}</Name>
          <City>{currentUser.properties.city}</City>
        </InfoWrapper>
        <WalletWrapper>
          <div>
            <Credit>
              <CreditName>Vouchers:</CreditName>
              <CreditValue>{currentUser.properties.vouchers}</CreditValue>
            </Credit>
            <Credit>
              <CreditName>Credits:</CreditName>
              <CreditValue>{currentUser.properties.credits}</CreditValue>
            </Credit>
            <Credit>
              <CreditName>Points:</CreditName>
              <CreditValue>{currentUser.properties.points}</CreditValue>
            </Credit>
          </div>
          <CreditQR>
            <QRCode />
          </CreditQR>
        </WalletWrapper>
      </RightSide>
    </Wrapper>
  );
}

export default UserCard;
