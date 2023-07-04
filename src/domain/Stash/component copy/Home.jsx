import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";

const Wrapper = styled.div`
  background-color: #c1f2c3;
`;

const Title = styled.div`
  font-family: "Assistant";
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 28px;

  text-align: center;

  color: #007897;
`;

function Home(props) {
  return (
    <Wrapper>
      <Title>TOGETHER Time Reward System</Title>
      <UserCard />
    </Wrapper>
  );
}

export default Home;
