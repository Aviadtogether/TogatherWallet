import { useEffect, useState, useMemo, useContext } from "react";
import HeaderSubTitle from "../../../craftkit/HeaderSubTitle/HeaderSubTitle";
import styled from "styled-components";
import RewardCard from "./RewardCard";
import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import Button from "../../../uikit/Button/Button";
import { SELECT_REWARD_NAME } from "../constans";
import { UserContext } from "../../../store/userContext";

const Wrapper = styled.div``;
const Title = styled.div`
  text-align: center;
  color: #155855;
  font-size: 15px;
  font-weight: 700;
  padding: 5px 0;
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
`;
const LeftSubTitle = styled.div`
  color: #155855;
  font-size: 15px;
  font-weight: 700;
`;
const RightLink = styled(Link)`
  color: #1e9898;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`;
const Cards = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

function TransferTimeReward(props) {
  const { currentUser } = useContext(UserContext);
  const [rewards] = useState(currentUser.rewards);
  const [isButtonsDisabled, setIsButtonDisabled] = useState(true);
  const { register, watch } = useFormContext();

  const selectedRewards = watch(SELECT_REWARD_NAME);

  const button1Style = useMemo(
    () => ({
      color: isButtonsDisabled ? "#ABABAB" : "#0B6D0B",
      backgroundColor: "#ffffff",
      border: `1px solid ${isButtonsDisabled ? "#ABABAB" : "#0B6D0B"}`,
      width: "160px",
      height: "50px",
    }),
    [isButtonsDisabled]
  );

  const button2Style = useMemo(
    () => ({
      color: isButtonsDisabled ? "#ABABAB" : "#EF9E00",
      backgroundColor: "#ffffff",
      border: `1px solid ${isButtonsDisabled ? "#ABABAB" : "#EF9E00"}`,
      width: "160px",
      height: "50px",
    }),
    [isButtonsDisabled]
  );

  useEffect(() => {
    if (
      typeof selectedRewards !== "undefined" &&
      selectedRewards?.length !== 0
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [selectedRewards]);

  return (
    <Wrapper>
      <HeaderSubTitle
        title={"Sivan"}
        subTitle={"Member - Student"}
        isBackable={true}
        backLink={"/"}
      />
      <Title>Transfer Time Reward</Title>
      <SubTitle>
        <LeftSubTitle>Available Reward</LeftSubTitle>
        <RightLink /*to={"/reward/gift-cards"}*/>Gift Card</RightLink>
      </SubTitle>
      <form>
        <Cards>
          {rewards &&
            rewards.map((reward) => (
              <RewardCard
                reward={reward}
                rewards={rewards}
                register={register}
                key={reward.id}
              />
            ))}
        </Cards>
        <ButtonGroup>
          <Button
            text={"Transfer"}
            goToLink={"/reward/choose-group"}
            styles={button1Style}
            isDisabled={isButtonsDisabled}
          />
          <Button
            text={"Redeem"}
            styles={button2Style}
            isDisabled={isButtonsDisabled}
          />
        </ButtonGroup>
      </form>
    </Wrapper>
  );
}

export default TransferTimeReward;
