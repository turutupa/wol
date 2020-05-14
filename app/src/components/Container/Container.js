import React from "react";
import styled from "styled-components";

const margin = {
  xs: "5px",
  s: "20px",
  m: "60px",
  l: "80px",
  xl: "120px",
};

const StyledContainer = styled.div`
  ${(props) => {
    if (props.center)
      return {
        display: "flex",
        flexDirection: props.column ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
      };
  }}
  height: 100%;
  width: auto;
  padding: ${(props) =>
    props.fluid
      ? "0"
      : props.margin && props.marginTop
      ? `${margin[props.marginTop]} ${margin[props.margin]}`
      : props.margin
      ? `0 ${margin[props.margin]}`
      : "0 5%"};
  display: ${(props) => (props.row || props.wrap ? "flex" : "")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "")};
`;

const Container = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
