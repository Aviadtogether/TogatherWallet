import React from "react";
import styled from "styled-components";
import Activities from "./component/Activities";
import {
  activitiesData,
  tasksData,
  eventsData,
  historiesData,
  groupsData,
} from "../Mock/activitiesData";
import { Link } from "react-router-dom";

import PrivateZoneCat from "./images/Categories/PrivateZone.svg";
import CityZoneCat from "./images/Categories/CityZone.svg";
import TogetherCat from "./images/Categories/Together.svg";
import UserCard from "./images/OrtSchool/UserCard.png";

const Wrapper = styled.div``;
const Title = styled.div`
  color: #8fd9a8;
  font-size: 23px;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 9px;
  margin-left: 20px;
`;
const SubTitle = styled.div`
  color: #28b5b5;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 11px;
  margin-left: 20px;
`;
const Categories = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 7px;
  margin-top: 11px;
  margin-bottom: 7px;
  margin-right: 5px;
`;
const StyledImage = styled.img`
  cursor: pointer;
`;

function OrtSchool(props) {
  return (
    <Wrapper>
      <Title>together in the city</Title>
      <SubTitle>School ecosystem</SubTitle>
      <Categories>
        <StyledImage src={PrivateZoneCat} alt="" />
        <StyledImage src={CityZoneCat} alt="" />
        <Link to={"/"}>
          <StyledImage src={TogetherCat} alt="" />
        </Link>
      </Categories>
      <img src={UserCard} alt="" />
      <Activities
        title={"My Activities"}
        data={activitiesData}
        domain={"school"}
      />
      <Activities title={"My Tasks"} data={tasksData} domain={"school"} />
      <Activities title={"My Events"} data={eventsData} domain={"school"} />
      <Activities title={"My History"} data={historiesData} domain={"school"} />
      <Activities title={"My Groups"} data={groupsData} domain={"school"} />
    </Wrapper>
  );
}

export default OrtSchool;
