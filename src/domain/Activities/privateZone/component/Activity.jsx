import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  padding: 9px 13px;
  margin: 17px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  border-radius: 10.717px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px #bfeec1;
`;
const Text = styled.div`
  color: var(--preview-txt, #58656d);
`;
const View = styled.div`
  color: #28b5b5;
  text-decoration-line: underline;
`;

function Activity(props) {
  const { image, text, actionText, action } = props;
  return (
    <Wrapper onClick={action}>
      <img src={image} alt="" />
      <Text>{text}</Text>
      <View>{actionText}</View>
    </Wrapper>
  );
}

export default Activity;
