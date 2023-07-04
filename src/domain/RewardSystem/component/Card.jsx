import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  border-radius: 16px;
  width: 316px;
  height: 125px;
  flex-shrink: 0;
  margin: auto;
  background: ${({ image }) =>
    `url(${image}), lightgray 0px 0px / 100% 162.679% no-repeat`};
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 11px 16px;
`;
const SideNameContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 17px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  writing-mode: vertical-rl;
`;
const SideName = styled.div`
  transform: rotate(-180deg);
  color: #003334;
  font-size: 12px;
  font-weight: 700;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.textColor};
`;
const Bottom = styled.div`
  position: absolute;
  bottom: 10px;
  left: 11px;
  right: 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.textColor};
  font-size: 14px;
  font-weight: 600;
`;
const Left = styled.div`
  display: flex;
`;
const IdText = styled.div`
  margin-left: 15px;
`;
const Right = styled.div`
  display: flex;
`;
const TransferLink = styled(Link)`
  color: ${(props) => props.textColor};
`;
const EditLink = styled(Link)`
  margin-left: 15px;
  color: ${(props) => props.textColor};
`;

function Card(props) {
  const { title, credit, rewardId, sideName, image, textColor, qrCode } = props;

  return (
    <Wrapper image={image}>
      <Top>
        <Title textColor={textColor}>{title}</Title>
        <img src={qrCode} alt="" />
      </Top>
      <Bottom textColor={textColor}>
        <Left>
          <div>{credit} Credit</div>
          <IdText>{rewardId}</IdText>
        </Left>
        <Right>
          <TransferLink textColor={textColor}>Transfer</TransferLink>
          <EditLink textColor={textColor}>Edit</EditLink>
        </Right>
      </Bottom>
      <SideNameContainer>
        <SideName>{sideName}</SideName>
      </SideNameContainer>
    </Wrapper>
  );
}

export default Card;
