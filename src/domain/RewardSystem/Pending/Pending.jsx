import { useEffect, useState, useMemo, useContext } from "react";
import HeaderSubTitle from "../../../craftkit/HeaderSubTitle/HeaderSubTitle";
import styled from "styled-components";
import RewardCard from "../transferTimeReward/RewardCard";
import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import Button from "../../../uikit/Button/Button";
import { SELECT_PENDING_REWARD_NAME } from "../constans";
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
  justify-content: center;
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

function Pending(props) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [rewards] = useState(currentUser.rewards);
  const [isButtonsDisabled, setIsButtonDisabled] = useState(true);
  const { register, watch } = useFormContext();

  const selectedRewards = watch(SELECT_PENDING_REWARD_NAME);

  const pendingRewards = useMemo(
    () => currentUser.rewards.filter((reward) => reward.status === "pending"),
    [currentUser.rewards]
  );

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

  const handleAccept = () => {
    const updatedRewards = currentUser.rewards.map((reward) => {
      if (selectedRewards.includes(reward.id)) {
        return { ...reward, status: "received" };
      }
      return reward;
    });

    // Update the currentUser state with the updated rewards
    setCurrentUser({ ...currentUser, rewards: updatedRewards });
  };

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
      <Title>Pending Reward</Title>
      <SubTitle>
        <LeftSubTitle>Received and awaiting approval</LeftSubTitle>
      </SubTitle>
      <form>
        <Cards>
          {pendingRewards &&
            pendingRewards.map((reward) => (
              <RewardCard
                reward={reward}
                rewards={rewards}
                register={register}
                key={reward.id}
                rewardName={SELECT_PENDING_REWARD_NAME}
              />
            ))}
        </Cards>
        <ButtonGroup>
          <Button
            text={"Accept"}
            styles={button1Style}
            isDisabled={isButtonsDisabled}
            onClick={handleAccept}
          />
        </ButtonGroup>
      </form>
    </Wrapper>
  );
}

export default Pending;
