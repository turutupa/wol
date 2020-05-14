import React from "react";
import styled from "styled-components";
import { colors } from "utils/constants/.";

const height = {
  xs: "10px",
  s: "60px",
  m: "250px",
  l: "350px",
  xl: "450px",
  xxl: "200px",
  default: "25px",
};

const StyledHero = styled.section`
  height: ${(props) => (props.size ? height[props.size] : height.default)};
  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.info};
  color: ${(props) =>
    props.color && props.color === "dark" ? "white" : "black"};
`;

function Hero(props) {
  return <StyledHero {...props}>{props.children}</StyledHero>;
}

export default Hero;
