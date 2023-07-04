import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: "100%";
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 37px;
  border-radius: 7px;
  border: 1px solid #28b5b5;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 8px;
`;

function SearchForm(props) {
  const { placeholder, isDisabled } = props;
  return (
    <Wrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        disabled={isDisabled}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Wrapper>
  );
}

export default SearchForm;
