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
import UserCard from "./images/TogetherInTheCity/UserCard.png";
import TextSearch from "./images/userAndSearch/SearchField";
import SearchIcon from "./images/userAndSearch/SearchIcon";
import MapSearch from "./images/userAndSearch/MapSearch";
import LocationIcon from "./images/userAndSearch/LocationIcon";

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

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const TextSearchWrapper = styled.div`
  display: flex;
  position: relative;
`;
const MapWrapper = styled.div`
  display: flex;
  position: relative;
`;
const SearchIconWrapper = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
`;
const LocationIconWrapper = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
`;
const UserCardImage = styled.img`
  width: 100%;
`;

function TogetherInTheCity(props) {
  return (
    <Wrapper>
      <Title>together in the city</Title>
      <SubTitle>tel AVIV ecosystem</SubTitle>
      <Categories>
        <StyledImage src={PrivateZoneCat} alt="" />
        <StyledImage src={CityZoneCat} alt="" />
        <Link to={"/"}>
          <StyledImage src={TogetherCat} alt="" />
        </Link>
      </Categories>
      <UserCardImage src={UserCard} alt="" />
      <SearchWrapper>
        <TextSearchWrapper>
          <TextSearch />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </TextSearchWrapper>
        <MapWrapper>
          <MapSearch />
          <LocationIconWrapper>
            <LocationIcon />
          </LocationIconWrapper>
        </MapWrapper>
      </SearchWrapper>
      <Activities
        title={"My Activities"}
        data={activitiesData}
        domain={"together"}
      />
      <Activities title={"My Tasks"} data={tasksData} domain={"together"} />
      <Activities title={"My Events"} data={eventsData} domain={"together"} />
      <Activities
        title={"My History"}
        data={historiesData}
        domain={"together"}
      />
      <Activities title={"My Groups"} data={groupsData} domain={"together"} />
    </Wrapper>
  );
}

export default TogetherInTheCity;
