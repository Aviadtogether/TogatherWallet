import React from "react";
import styled from "styled-components";
import HeaderSubTitle from "../../../craftkit/HeaderSubTitle/HeaderSubTitle";
import crosswalk from "../Mock/Images/crosswalkFull.png";
import Button from "../../../uikit/Button/Button";

const Title = styled.div`
  text-align: center;
  color: #a223f5;
  font-size: 25px;
  font-weight: 700;
  padding: 5px 0;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 215px;
  object-fit: cover;
  margin: 15px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  padding: 45px;
`;

const buttonStyle = {
  color: "#B699C9",
  backgroundColor: "#FCFCFC",
  border: "2px solid #B699C9",
  width: "270px",
  height: "50px",
};

function ChooseGroup(props) {
  return (
    <>
      <HeaderSubTitle
        title={"Sivan"}
        subTitle={"Member - Student"}
        isBackable={true}
        backLink={"/reward"}
      />
      <Title>Transfer Time Reward</Title>
      <StyledImg src={crosswalk} alt="" />
      <ButtonGroup>
        <Button
          text={"Family & Friends"}
          subText={"1"}
          goToLink={"/reward/choose-group/friends"}
          styles={buttonStyle}
          isDropdown={true}
        />
        <Button
          text={"Family & Friends"}
          // goToLink={"/reward/choose-group/activities"}
          styles={buttonStyle}
          isDropdown={true}
        />
        <Button
          text={"Family & Friends"}
          // goToLink={"/reward/choose-group/organization "}
          styles={buttonStyle}
          isDropdown={true}
        />
        <Button
          text={"Family & Friends"}
          // goToLink={"/reward/choose-group/admin"}
          styles={buttonStyle}
          isDropdown={true}
        />
      </ButtonGroup>
    </>
  );
}

export default ChooseGroup;
