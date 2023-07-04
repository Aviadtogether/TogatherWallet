import Card from "../component/Card";
import styled from "styled-components";
import { SELECT_REWARD_NAME } from "../constans";

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const CheckboxContainer = styled.div``;
const Checkbox = styled.input`
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #000;
`;

function RewardCard(props) {
  const { reward, register, rewardName = SELECT_REWARD_NAME } = props;

  return (
    <Wrapper>
      <CheckboxContainer>
        <Checkbox type="checkbox" value={reward.id} {...register(rewardName)} />
      </CheckboxContainer>
      <Card
        title={reward.title}
        credit={reward.credit}
        id={reward.id}
        rewardId={reward.rewardId}
        sideName={reward.sideName}
        image={reward.image}
        textColor={reward.textColor}
        qrCode={reward.qrCode}
      />
    </Wrapper>
  );
}

export default RewardCard;
