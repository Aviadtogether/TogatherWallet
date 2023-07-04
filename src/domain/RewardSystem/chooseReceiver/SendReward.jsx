import { useMemo, useState, useContext, useCallback } from "react";
import LeftArrow from "../../../assets/icons/LeftArrow";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import crosswalk from "../../../assets/images/Mock/crosswalkFull.png";
import Card from "../component/Card";
import { useFormContext } from "react-hook-form";
import { SELECT_REWARD_NAME } from "../constans";
import Button from "../../../uikit/Button/Button";
import { UserContext } from "../../../store/userContext";
import { transferRewards } from "./utils";

const Wrapper = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

const ReturnWrapper = styled(Link)`
  position: absolute;
  top: 12px;
  left: 5px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 215px;
  object-fit: cover;
  margin: 15px 0;
`;

const Type = styled.div`
  color: #4caf50;
  font-weight: 700;
  padding: 5px 0;
`;
const Title = styled.div`
  color: #25beb7;
  padding: 5px 0;
`;
const Name = styled.div`
  color: #003334;
  padding: 10px 0;
`;

const CardWrapper = styled.div`
  padding: 10px 0;
`;

const buttonStyle = {
  color: "#4CAF50",
  backgroundColor: "#ffffff",
  border: "1px solid #4CAF50",
  width: "212px",
  height: "50px",
  margin: "20px auto",
};

function SendReward(props) {
  const { id } = useParams();
  const { watch } = useFormContext();
  const cardsId = useMemo(() => watch(SELECT_REWARD_NAME), [watch]);
  const [sendValue, setSendValue] = useState("Confirm");
  const { users, setUsers, currentUser } = useContext(UserContext);

  const user = useMemo(() => {
    return users.find((user) => (user.properties.id = id));
  }, [id]);

  const cards = useMemo(() => {
    return currentUser.rewards?.filter((reward) =>
      cardsId?.includes(reward.id.toString())
    );
  }, [cardsId, currentUser.rewards]);

  const sendRewards = useCallback(() => {
    setUsers(transferRewards(users, cardsId));
    setSendValue("Share");
  }, [setUsers, setSendValue, transferRewards]);

  return (
    <Wrapper>
      <ReturnWrapper to={"/reward/choose-group/friends/"}>
        <LeftArrow />
      </ReturnWrapper>
      <StyledImg src={crosswalk} alt="" />
      <Type>Member</Type>
      <Title>Transfer details</Title>
      <Name>{user.properties.name}</Name>
      {cards &&
        cards.map((card) => (
          <CardWrapper key={card.id}>
            <Card
              title={card.title}
              credit={card.credit}
              id={card.id}
              rewardId={card.rewardId}
              sideName={card.sideName}
              image={card.image}
              textColor={card.textColor}
              qrCode={card.qrCode}
            />
          </CardWrapper>
        ))}
      <Button text={sendValue} styles={buttonStyle} action={sendRewards} />
      <Button
        text={"Back To Wallet Dashboard"}
        styles={buttonStyle}
        goToLink={"/"}
      />
    </Wrapper>
  );
}

export default SendReward;
