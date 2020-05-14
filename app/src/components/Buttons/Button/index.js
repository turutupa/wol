/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from "react";
import { Link } from "react-router-dom";

import A from "./A";
import StyledButton from "./StyledButton";
import Wrapper from "./Wrapper";

function SButton(props) {
  // Render an anchor tag
  let Button = (
    <StyledButton href={props.href} onClick={props.onClick} {...props}>
      {Children.toArray(props.children)}
    </StyledButton>
  );

  // If the Button has a handleRoute prop, we want to render a Button
  if (props.to) {
    Button = (
      <Link to={props.to} onClick={props.handleRoute}>
        {Button}
      </Link>
    );
  }
  if (props.margin) {
    return <Wrapper margin={props.margin}>{Button}</Wrapper>;
  } else {
    return Button;
  }
}

export default SButton;
