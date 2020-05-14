import React from "react";
import styled from "styled-components";
import { colors } from "utils/constants/.";
import { FaTimesCircle } from "react-icons/fa";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background-color: ${(props) => (props.color ? props.color : colors.dark)};
  color: ${(props) => (props.color ? "black" : "white")};
  border-radius: 5px;
  padding-right: 40px;
  cursor: pointer;

  &:hover {
    opacity: 50%;
  }
`;

const DeleteButton = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Badge(props) {
  return (
    <Wrapper>
      {props.children}
      <DeleteButton>
        <FaTimesCircle />
      </DeleteButton>
    </Wrapper>
  );
}

export default Badge;
