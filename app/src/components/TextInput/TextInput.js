import React from "react";
import styled from "styled-components";
import "./TextInput.css";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { paths } from "utils/constants/.";

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1em 1.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 5px;
  width: 100%;
  min-width: 300px;
  box-shadow: ${(props) =>
    props.noShadow ? "" : "0 4px 8px 0 rgba(0, 0, 0, 0.2)"};
  padding-right: ${(props) => (props.icon ? "5em" : "1.5em")};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${(props) => (props.icon ? "-80px" : "")};
`;

function TextInput(props) {
  const icon = props.icon || false;
  const dispatch = useDispatch();

  const Icon = icon
    ? styled(icon)`
        position: absolute;
        right: 20px;
        font-size: 35px;
        cursor: pointer;
        transition: all 300ms;

        &:hover {
          opacity: 0.8;
        }
      `
    : () => <></>;

  return (
    <Wrapper {...props}>
      <Input placeholder={props.placeholder} {...props} />
      <Icon onClick={() => dispatch(push(paths.browseCircles))} />
    </Wrapper>
  );
}

export default TextInput;
