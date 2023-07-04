import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50.52px;
  height: 26.54px;
  background: ${(props) => props.backgroundColor};
  box-shadow: 0px 2.2151px 8.30661px rgba(0, 0, 0, 0.25);
  border-radius: 13.5675px 16.0595px 16.0595px 13.5675px;
`;

function Icon(props) {
  const { backgroundColor, link, image } = props;

  const navigate = useNavigate();

  const handleClick = () => navigate(link);

  return (
    <Wrapper backgroundColor={backgroundColor} onClick={handleClick}>
      <img src={image} alt="" />
    </Wrapper>
  );
}

export default Icon;
