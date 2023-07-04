import React from "react";
import UserCard from "./UserCard";
import Direct from "./Direct";
import ButtonGroup from "./ButtonGroup";
import ShortcutIcons from "../shorcutIcons/ShortcutIcons";
import Title from "../../../craftkit/Title/Title";

function Home(props) {
  return (
    <div>
      <Title title={"TOGETHER Time Reward System"} />
      <ShortcutIcons />
      <UserCard />
      <Direct />
      <ButtonGroup />
    </div>
  );
}

export default Home;
