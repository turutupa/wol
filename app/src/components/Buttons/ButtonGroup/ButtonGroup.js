import React from "react";
import styled from "styled-components";

const StyledButtonGroup = styled.div`
  background-color: black;
`;

function ButtonGroup(props) {
  return <StyledButtonGroup>{props.children}</StyledButtonGroup>;
}

export default ButtonGroup;
