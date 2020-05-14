import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-align: center;
  flex-direction: row;
`;

const Col = styled.div`
  width: 33.3333%;
  height: 400px;
  transition: all 0.5s ease-in;

  &:hover {
    filter: brightness(1.1);
  }

  @media (min-width: 1500px) {
    width: 25%;
  }
  @media (max-width: 1300px) {
    width: 33.33333%;
  }
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

function GridContainer(props) {
  return (
    <Container>
      {props.items.map((item, i) => (
        <Col key={i}>{item}</Col>
      ))}
    </Container>
  );
}

export default GridContainer;
