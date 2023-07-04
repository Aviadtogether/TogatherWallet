import React from "react";
import Button from "../../../uikit/Button/Button";

const buttonStyle = {
  color: "#337a37",
  backgroundColor: "#ffffff",
  shadow: "0px 4px 12px rgba(70, 57, 77, 0.1)",
  width: "340px",
  height: "49px",
  margin: "44px auto",
};

function ButtonGroup(props) {
  return (
    <>
      <Button
        text={"Transfer  Volunteer  Time  Reward"}
        goToLink={"/reward"}
        styles={buttonStyle}
      />
      <Button
        text={"Activities  &  Tasks"}
        subText={"22"}
        // goToLink={"/activities"}
        styles={buttonStyle}
      />
      <Button
        text={"Benefits  &  Volunteer  Events"}
        subText={"18"}
        // goToLink={"/activities"}
        styles={buttonStyle}
      />
      <Button
        text={"All  Pending"}
        subText={"3"}
        styles={buttonStyle}
        goToLink={"/reward/pending"}
      />
    </>
  );
}

export default ButtonGroup;
