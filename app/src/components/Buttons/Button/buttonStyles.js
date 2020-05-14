import { css } from "styled-components";
import { colors } from "utils/constants/.";

// conditionals if button is outline or not
// conditionals for Background, Border, Font
const outlineBackground = (props) =>
  props.outline ? "none" : props.color ? colors[props.color] : colors.primary;

const outlineBorder = (props) =>
  props.color ? colors[props.color] : colors.primary;

const outlineFont = (props) =>
  props.outline && props.color
    ? colors[props.color]
    : props.outline
    ? colors.primary
    : colors.defaultFontColor;

const buttonStyles = css`
  background: ${(props) => outlineBackground(props)};
  border: 2px solid ${(props) => outlineBorder(props)};
  color: ${(props) => outlineFont(props)};
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 5px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  transition: all 300ms ease-in;

  &:hover {
    opacity: 0.7;
    filter: brigthness(1.1);
  }

  &:active {
    background: ${(props) =>
      props.color ? colors[props.color] : colors.primary};
    opacity: 0.8;
    color: ${(props) =>
      props.outline && props.color
        ? colors.defaultFontColor
        : props.color
        ? colors.defaultFontColor
        : props.outline
        ? colors.defaultFontColor
        : colors[props.color]};
  }
`;

export default buttonStyles;
