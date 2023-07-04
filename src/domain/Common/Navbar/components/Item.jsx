import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.a`
  height: 47px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  text-align: center;
`;

const Text = styled.div`
  margin-top: auto;
  font-family: "Assistant";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.textColor};
`;

function Item(props) {
  const { textColor, Icon, text, navigateLink } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(navigateLink);
  };

  return (
    <Wrapper onClick={handleNavigate}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Text textColor={textColor}>{text}</Text>
      <div className="ellipse"></div>
    </Wrapper>
  );
}

export default Item;
