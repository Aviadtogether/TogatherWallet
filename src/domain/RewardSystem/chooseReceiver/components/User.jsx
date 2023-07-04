import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 50%;
`;
const Name = styled.div`
  color: var(--title-dark, #53575f);
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function User(props) {
  const { image, name, id, clickAction } = props;

  return (
    <Wrapper onClick={() => clickAction(id)}>
      <Image src={image} alt="" />
      <Name>
        <div>{name}</div>
      </Name>
    </Wrapper>
  );
}

export default User;
