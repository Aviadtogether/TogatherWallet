import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import HeaderSubTitle from "../../../craftkit/HeaderSubTitle/HeaderSubTitle";
import SearchForm from "../../../craftkit/SearchForm/SearchForm";
import EmailInput from "./components/EmailInput";
import User from "./components/User";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../store/userContext";

const Title = styled.div`
  align-items: start;
  color: #b699c9;
  font-size: 15px;
  font-weight: 700;
  margin-left: 5px;
`;

const SearchFormWrapper = styled.div`
  padding: 11px;
  margin-top: 10px;
  ::placeholder {
    padding: 10px;
  }
`;

const EmailTitle = styled.div`
  color: #1e9898;
  font-size: 16px;
  font-weight: 600;
  margin: 0 25px;
  margin-top: 10px;
`;

const Email = styled.div`
  color: rgba(105, 109, 114, 0.8);
  font-size: 16px;
  text-align: center;
  padding: 8px 20px;
  margin: 10px;
  border-radius: 7px;
  border: ${(props) => (props.hasBorder ? "1px solid #28b5b5" : "none")};
`;

const UserContainer = styled.div`
  border-bottom: 1px solid #9fa3a8;
  margin: 0 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

function FriendAndFamily(props) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const chooseUser = useCallback(
    (userId) => {
      navigate("/reward/choose-group/friends/" + userId);
    },
    [navigate]
  );

  return (
    <>
      <HeaderSubTitle
        title={"Sivan"}
        subTitle={"Member - Student"}
        isBackable={true}
        backLink={"/reward/choose-group"}
      />
      <Title>Family & Friends (1)</Title>
      <div>
        <SearchFormWrapper>
          <SearchForm placeholder={"Wallet Number"} isDisabled={true} />
        </SearchFormWrapper>
        <EmailInput />
        <EmailTitle>Last Contacts@timewallet</EmailTitle>
        <div>
          <Email hasBorder={true}>+972 545252252@2252timewallet.com</Email>
          <Email hasBorder={true}>+972 545252244@2244timewallet.com</Email>
          <Email hasBorder={true}>+972 545254547@4547timewallet.com</Email>
          <Email hasBorder={false}>+972 545267777@7777timewallet.com</Email>
        </div>
      </div>
      <div>
        <SearchFormWrapper>
          <SearchForm placeholder={"Search"} isDisabled={true} />
        </SearchFormWrapper>
        <div>
          {currentUser.friends.map((user) => (
            <UserContainer key={user.id}>
              <User
                image={user.image}
                name={user.name}
                id={user.id}
                clickAction={chooseUser}
              />
            </UserContainer>
          ))}
        </div>
      </div>
    </>
  );
}

export default FriendAndFamily;
