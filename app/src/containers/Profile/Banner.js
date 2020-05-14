import React from "react";
import styled from "styled-components";
import { Hero as hero, Container as container, Header, Card } from "components";

const backgroundURL =
  "https://images.unsplash.com/photo-1528044092202-9567476d02d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80";

const Hero = styled(hero)`
  background-image: url(${backgroundURL});
  background-repate: no-repeat;
  background-fit: cover;
`;

const Container = styled(container)`
  text-align: center;
  padding-top: 5%;
`;

function Banner() {
  return (
    <Hero size="m">
      <Container>
        <Header style={{ color: "white" }}>Profile</Header>
      </Container>
    </Hero>
  );
}

export default Banner;
