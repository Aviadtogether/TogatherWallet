import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowDown from "../../assets/icons/ArrowDown";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  box-shadow: ${(props) => props.shadow};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  cursor: ${(props) => (props.isDisabled ? "auto" : "pointer")};
  color: ${(props) => props.color};
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 15px;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 25%;
`;

const buttonStyles = {
  color: "#000000",
  backgroundColor: "#ffffff",
  border: "none",
  shadow: "none",
  width: "100%",
  height: "100%",
  margin: "0",
  padding: "0",
  borderRadius: "12px",
};

function Button(props) {
  const {
    text,
    subText,
    goToLink,
    isDropdown,
    action,
    actionProps = "",
    isDisabled,
    styles,
  } = props;

  const navigate = useNavigate();

  const handleAction = () => {
    if (isDisabled) {
      return;
    }
    if (goToLink) {
      navigate(goToLink);
    }
    if (action) {
      action(actionProps);
    }
  };

  const mergedStyles = { ...buttonStyles, ...styles };

  return (
    <Wrapper onClick={handleAction} isDisabled={isDisabled} {...mergedStyles}>
      <Text>
        {text} {subText && <span>({subText})</span>}
      </Text>
      {isDropdown && (
        <DropdownWrapper>
          <ArrowDown />
        </DropdownWrapper>
      )}
    </Wrapper>
  );
}

export default Button;
