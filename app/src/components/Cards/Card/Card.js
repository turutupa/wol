import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${(props) => (props.color ? props.color : "white")};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 30px;
`;

function Card(props) {
  return <StyledCard>{props.children}</StyledCard>;
}

export default Card;
