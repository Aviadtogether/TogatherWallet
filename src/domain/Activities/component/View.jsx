import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { activitiesData } from "../Mock/activitiesData";
import { styled } from "styled-components";
import BlueCalendar from "../../../assets/icons/BlueCalendar";
import Waze from "../../../assets/images/Location/Waze.svg";
import Maps from "../../../assets/images/Location/Maps.svg";
import CommunityTransportation from "../../../assets/icons/Location/CommunityTransportation";
import Button from "../../../uikit/Button/Button";
import AddedCard from "../Mock/Images/AddedCard.png";
import TransparentBack from "../../../uikit/Icons/Activities/TransparentBack";

const Wrapper = styled.div`
  position: relative;
`;
const Title = styled.div`
  color: var(--title-dark, #53575f);
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  margin-top: 15px;
`;
const Added = styled.div`
  color: var(--text, #696d72);
  font-size: 16px;
  font-weight: 400;
  text-align: end;
  margin: 15px 0;
  margin-right: 10px;
`;
const Description = styled.div`
  color: var(--text, #696d72);
  text-align: center;
  font-size: 18px;
  font-weight: 400;
`;
const EditWrapper = styled.div`
  display: flex;
  justify-content: end;
  border-bottom: 2px solid #28b5b5;
  margin: 5px 11px;
  padding-bottom: 4px;
`;
const Edit = styled.div`
  color: #696d72;
  font-size: 20px;
  font-weight: 700;
  text-decoration-line: underline;
`;

const DateWrapper = styled.div`
  margin-top: 22px;
  margin-left: 20px;
  display: flex;
`;
const DateTextWrapper = styled.div`
  margin-left: 16px;
`;
const Date = styled.div`
  color: var(--text, #696d72);
  font-size: 18px;
  font-weight: 600;
`;
const Time = styled.div`
  color: var(--gray-3, #828282);
  font-size: 16px;
  font-weight: 400;
`;

const LocationWrapper = styled.div`
  margin: 0 20px;
  margin-top: 22px;
`;
const Address = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AddressName = styled.div`
  color: var(--text, #696d72);
  font-size: 18px;
  font-weight: 600;
`;
const AddressLocation = styled.div`
  color: var(--gray-3, #828282);
  font-size: 16px;
  font-weight: 400;
`;
const StyledMap = styled.img`
  margin-left: 12px;
`;
const Credits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Credit = styled.div`
  color: var(--text, #696d72);
  font-size: 18px;
  font-weight: 600;
`;

const StatusWrapper = styled.div`
  margin: 25px 20px;
`;
const StatusTitle = styled.div`
  color: #4caf50;
  font-size: 16px;
  font-weight: 700;
  margin: 10px 0;
`;
const StatusRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Status = styled.div`
  color: #696d72;
  font-size: 16px;
  font-weight: 600;
`;
const Open = styled.span`
  color: #018b07;
`;
const SelectedGroup = styled.div`
  color: #1e579d;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
`;
const AddedWrapper = styled.div`
  text-align: end;
`;
const AddedTitle = styled.div`
  color: var(--text, #696d72);
  font-size: 16px;
  font-weight: 400;
  margin-right: 18px;
`;
const AddedCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const TransparentBackWrapper = styled(Link)`
  position: absolute;
  top: 3px;
  left: 12px;
`;

const buttonStyles = {
  color: "#FAFAFA",
  backgroundColor: "#28B5B5",
  shadow: "box-shadow: 0px 4px 10px 0px rgba(66, 132, 128, 0.20);",
  width: "235px",
  margin: "30px auto",
  padding: "12px 0",
  borderRadius: "30px",
};

function View(props) {
  const { id } = useParams();

  const currentActivity = useMemo(
    () => activitiesData.find((activity) => activity.id === Number(id)),
    [id]
  );

  return (
    <Wrapper>
      <img src={currentActivity.imageL} alt="" />
      <Title>A picnic in the neighborhood park</Title>
      <Added>Added: {currentActivity.added}</Added>
      <Description>
        Description of the task in a few lines up to a certain number of
        characters to avoid digging. Description of the task in a few lines up
        to a certain number of characters.
      </Description>
      <EditWrapper>
        <Edit>Edit</Edit>
      </EditWrapper>
      <DateWrapper>
        <BlueCalendar />
        <DateTextWrapper>
          <Date>{currentActivity.date}</Date>
          <Time>{currentActivity.time}</Time>
        </DateTextWrapper>
      </DateWrapper>
      <LocationWrapper>
        <Address>
          <div>
            <AddressName>The community center</AddressName>
            <AddressLocation>Dobnov 54, Tel Aviv</AddressLocation>
          </div>
          <div>
            <img src={Waze} alt="" />
            <StyledMap src={Maps} alt="" />
          </div>
        </Address>
        <Credits>
          <CommunityTransportation />
          <Credit>{currentActivity.credit} Credit</Credit>
        </Credits>
      </LocationWrapper>
      <StatusWrapper>
        <StatusTitle>Event Status:</StatusTitle>
        <StatusRow>
          <Status>
            <Open>Open</Open> / Close
          </Status>
          <SelectedGroup>Member only</SelectedGroup>
        </StatusRow>
      </StatusWrapper>
      <Button
        text={"Register & Transfer Reward"}
        styles={buttonStyles}
        // goToLink={"/activities/register/0"}
      />
      <AddedWrapper>
        <AddedTitle>Added by:</AddedTitle>
        <AddedCardWrapper>
          <img src={AddedCard} alt="" />
        </AddedCardWrapper>
      </AddedWrapper>
      <TransparentBackWrapper to={"/activities/together"}>
        <TransparentBack />
      </TransparentBackWrapper>
    </Wrapper>
  );
}

export default View;
