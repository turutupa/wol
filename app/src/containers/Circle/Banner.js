import React from "react";
import { Container as container, Hero as hero, Header } from "components";
import { useSelector } from "react-redux";
import { circleState } from "utils/selectCircleSlice";
import styled from "styled-components";
import { colors } from "utils/constants/.";

const Container = styled(container)`
  margin-right: 40%;
`;

const Hero = styled(hero)`
  height: auto;
  position: relative;
  overflow: hidden;
`;

const Img = styled.div`
  position: absolute;
  background-image: ${(props) => (props.img ? `url(${props.img})` : "")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 500px;
  right: -50px;
  top: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 10px ${colors.dark},
    0 0 0 15px ${colors.backgroundColor};
`;

function Banner(props) {
  const circle = useSelector(circleState).circle;

  const tempUrl =
    "https://i1.wp.com/s3.eu-west-2.amazonaws.com/fifteen-uploads/uploads/2018/04/1-2-1.jpg?fit=1442%2C795&ssl=1";

  return (
    <>
      <Hero size="l" color="dark">
        <Container margin="m" marginTop="l">
          <Header>{circle.name}</Header>
          <Header type="h5">{circle.description}</Header>
        </Container>
        <Img img={tempUrl}></Img>
      </Hero>
    </>
  );
}

export default Banner;
