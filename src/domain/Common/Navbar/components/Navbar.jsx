import React from "react";
import styled from "styled-components";
import Item from "./Item";
import Search from "./Icons/Search";
import Home from "./Icons/Home";
import Messages from "./Icons/Messages";
import Notifications from "./Icons/Notifications";
import Profile from "./Icons/Profile";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  height: 71px;
  background: #ffffff;
  box-shadow: -4px -4px 20px rgba(202, 202, 202, 0.2);
  border-radius: 10px;
  bottom: 0;
  width: 100%;
`;

function Navbar(props) {
  return (
    <Wrapper>
      <Item
        textColor={"#004CAC"}
        Icon={Search}
        text={"Search"}
        // navigateLink={"/search"}
      />
      <Item
        textColor={"#4CAF50"}
        Icon={Home}
        text={"Home"}
        navigateLink={"/"}
      />
      <Item
        textColor={"#EF7300"}
        Icon={Messages}
        text={"Messages"}
        // navigateLink={"/messages"}
      />
      <Item
        textColor={"#1E9898"}
        Icon={Notifications}
        text={"Notifications"}
        // navigateLink={"/notifications"}
      />
      <Item
        textColor={"#6801a7"}
        Icon={Profile}
        text={"Profile"}
        // navigateLink={"/profile"}
      />
    </Wrapper>
  );
}

export default Navbar;
