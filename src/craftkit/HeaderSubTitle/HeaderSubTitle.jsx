import React from "react";
import LeftArrow from "./Icons/LeftArrow";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 15px;
`;
const MainTitle = styled.div`
  color: #003334;
  margin-right: 5px;
`;
const SubTitle = styled.div`
  color: #007897;
`;
const ReturnArrow = styled(Link)`
  margin-left: 10px;
`;

function HeaderSubTitle(props) {
  const { title, subTitle, isBackable, backLink } = props;
  return (
    <Wrapper>
      {isBackable && (
        <ReturnArrow to={backLink}>
          <LeftArrow />
        </ReturnArrow>
      )}
      <Title>
        <MainTitle>{title}</MainTitle>
        <SubTitle>{subTitle}</SubTitle>
      </Title>
    </Wrapper>
  );
}

export default HeaderSubTitle;
