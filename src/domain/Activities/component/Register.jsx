import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { activitiesData } from "../Mock/activitiesData";
import { styled } from "styled-components";
import Title from "../../../craftkit/Title/Title";
import HeaderSubTitle from "../../../craftkit/HeaderSubTitle/HeaderSubTitle";

const Wrapper = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
`;
const HeaderKey = styled.div`
  color: var(--text, #696d72);
  font-size: 16px;
  font-weight: 400;
`;
const HeaderValue = styled.div`
  color: var(--title-dark, #53575f);
  font-size: 20px;
  font-weight: 700;
`;

const a = styled.div``;

function View(props) {
  const { id } = useParams();

  const currentActivity = useCallback(
    activitiesData.find((activity) => activity.id === Number(id)),
    [activitiesData, id]
  );

  return (
    <Wrapper>
      <Title title={"TOGETHER Time Reward System"} />
      <HeaderSubTitle
        title={"Sivan"}
        subTitle={"Member - Student"}
        isBackable={true}
        backLink={"/activities/view/" + id}
      />
      <Header>
        <HeaderKey>Task Details:</HeaderKey>
        <HeaderValue>Registration</HeaderValue>
      </Header>
    </Wrapper>
  );
}

export default View;
