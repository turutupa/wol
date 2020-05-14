import React from "react";
import styled from "styled-components";
import { colors } from "utils/constants/.";
import ReactTooltip from "react-tooltip";

const CreateButton = styled.div`
  position: fixed;
  display: flex;
  top: calc(100vh - 130px);
  right: 15px;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  font-size: 30px;
  background-color: ${colors.primary};
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

  &:hover {
    opacity: 0.9;
  }
`;

const CreateLabel = styled.div`
  position: absolute;
  font-size: 80px;
  font-weight: bold;
  top: -5px;
  right: 25px;
  color: white;
`;

function CreateNewCircle() {
  return (
    <>
      <CreateButton data-tip="" data-for="create-new-circle">
        <CreateLabel>+</CreateLabel>
      </CreateButton>
      <ReactTooltip id="create-new-circle">Create new circle</ReactTooltip>
    </>
  );
}

export default CreateNewCircle;
