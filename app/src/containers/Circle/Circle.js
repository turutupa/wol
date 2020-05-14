import React from "react";
import { Loading, FadeIn } from "components";
import { useSelector } from "react-redux";
import { circleState } from "utils/selectCircleSlice";

// import components
import Banner from "./Banner";
import Description from "./Description";
import Tasks from "./Tasks";

function Circle(props) {
  const circle = useSelector(circleState).circle;

  return (
    <Loading>
      <FadeIn>
        <Banner />
        <Description />
        <Tasks />
      </FadeIn>
    </Loading>
  );
}

export default Circle;
