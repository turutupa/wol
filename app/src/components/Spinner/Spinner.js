import React from "react";
import { BounceLoader } from "react-spinners";
import { FullScreenContainer } from "../Container";

const Spinner = () => (
  <FullScreenContainer>
    <BounceLoader />
  </FullScreenContainer>
);

export default Spinner;
