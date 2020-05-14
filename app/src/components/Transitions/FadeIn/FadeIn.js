import React from "react";
import EasyTransition from "react-easy-transition";

const FadeIn = (props) => {
  let duration = 0.4;
  if (props.duration) {
    duration = props.duration / 1000;
  }

  return (
    <EasyTransition
      path={window.location.pathname}
      initialStyle={{ opacity: 0 }}
      transition={`opacity ${duration}s ease-in`}
      finalStyle={{ opacity: 1 }}
    >
      {props.children}
    </EasyTransition>
  );
};

export default FadeIn;
