import React from "react";
import styled from "styled-components";
import ArrowDown from "../../../../assets/icons/ArrowDown";
import Activity from "./Activity";
import { useNavigate } from "react-router-dom";
import PaperPlane from "../../../../uikit/Icons/Activities/PaperPlane";

const Wrapper = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-bottom: 0;
`;
const Title = styled.div`
  color: var(--titles-green, #65a884);
  font-size: 16px;
  font-weight: 600;
  text-decoration-line: underline;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Create = styled.div`
  color: #ef7300;
  font-size: 13.974px;
  font-weight: 600;
  text-decoration-line: underline;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const ActivitiesWrapper = styled.div``;

function Activities(props) {
  const { title, data } = props;
  const navigate = useNavigate();
  const id = 0;

  const viewHandler = () => {
    navigate(`/activities/view/${id}`);
  };

  return (
    <Wrapper>
      <Header>
        <TitleWrapper>
          <Title>{title}</Title>
          <PaperPlane />
        </TitleWrapper>
        <Actions>
          <Create>Create</Create>
          <ArrowDown />
        </Actions>
      </Header>
      <ActivitiesWrapper>
        {data.map((activity) => (
          <Activity
            image={activity.image}
            text={activity.name}
            actionText={activity.actionText}
            action={activity.hasAction && viewHandler}
            key={activity.id}
          />
        ))}
      </ActivitiesWrapper>
    </Wrapper>
  );
}

export default Activities;
