import React from "react";
import Icon from "./Icon";
import styled from "styled-components";

import horse from "./MockImgs/horse.svg";
import mountain from "./MockImgs/mountain.svg";
import sunset from "./MockImgs/sunset.svg";
import zoology from "./MockImgs/zoology.svg";
import elephant from "./MockImgs/elephant.svg";
import home from "./MockImgs/home.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
`;

const IconWrapper = styled.div`
  /* display: flex; */
  /* justify-content: space-around; */
`;

// const SideIcon = styled.div``;

function ShortcutIcons(props) {
  return (
    <Wrapper>
      {/* <IconWrapper> */}
      <Icon backgroundColor={"#FF5555"} link={""} image={horse} />
      <Icon backgroundColor={"#B699C9"} link={""} image={mountain} />
      <Icon backgroundColor={"#9CD0FF"} link={""} image={sunset} />
      <Icon backgroundColor={"#EF7300"} link={""} image={zoology} />
      <Icon backgroundColor={"#007897"} link={""} image={elephant} />
      {/* </IconWrapper> */}
      {/* <SideIcon> */}
      <img src={home} alt="" />
      {/* </SideIcon> */}
    </Wrapper>
  );
}

export default ShortcutIcons;
