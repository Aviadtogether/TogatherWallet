import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #337a37;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  text-decoration-line: underline;
  color: #66bb6a;
`;

function Direct(props) {
  return (
    <Wrapper>
      <Title>Direct to Together Apps</Title>
      <LinksWrapper>
        <StyledLink>Dobnov com.</StyledLink>
        <StyledLink to={"/activities/together"}>
          Together In The City
        </StyledLink>
        <StyledLink to={"/activities/school"}>Ort School</StyledLink>
      </LinksWrapper>
    </Wrapper>
  );
}

export default Direct;
