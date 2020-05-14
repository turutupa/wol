import React from "react";
import styled from "styled-components";

const font = {
  subtitle: "25px",
  h1: "50px",
  h2: "40px",
  h3: "30px",
  h4: "25px",
  h5: "25px",
  h6: "20px",
};

const weight = {
  subtitle: false,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: false,
  h6: false,
};

const StyledHeaders = styled.div`
  ${(props) => ({
    fontSize: props.subtitle ? "25px" : props.type ? font[props.type] : "50px",
    fontWeight: props.bold ? "bold" : props.type ? font[props.type] : "bold",
  })}
  margin: 0;
`;

function Header(props) {
  return <StyledHeaders {...props}>{props.children}</StyledHeaders>;
}

export default Header;
