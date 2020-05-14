import React from "react";
import styled from "styled-components";
import { sizes } from "utils/constants/.";

const FullScreenContainerStyled = styled.section`
  position: absolute;
  top: ${sizes.bannerHeight};
  width: 100vw;
  height: calc(50vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // pointer-events: none;
  z-index: 9999;
`;

const FullScreenContainer = (props) => (
  <FullScreenContainerStyled>{props.children}</FullScreenContainerStyled>
);

export default FullScreenContainer;
