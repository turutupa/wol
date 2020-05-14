import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { default as img } from "react-image";
import { colors, paths } from "utils/constants/.";
import { CircleLoader } from "react-spinners";
import EasyTransition from "react-easy-transition";
import ReactTooltip from "react-tooltip";
import { FcLike, FcConferenceCall } from "react-icons/fc";
import "./CirclesCard.css";

import { selectCircle } from "utils/selectCircleSlice";

const Card = styled.div`
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 90%;
  // width: 100%;
  border-radius: 5px;
  margin: 20px;
  background-color: white;
  transition: all 500ms ease-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Img = styled(img)`
  height: calc(100% - 60px);
  width: 100%;
  object-fit: cover;
  transition: all 500ms ease-in-out;
  border-radius: 5px 5px 0 0;

  &:hover {
    cusor: pointer;
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;

  &:before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%);
    content: "";
    background: ${colors.primary};
    border-radius: 80%;
    width: 0px;
    height: 0;
    transition: all 0.5s ease-in;
  }

  &:hover:before {
    width: 500px;
    height: 500px;
  }

  &:hover:active {
    filter: brightness(1.04);
  }
`;

const Name = styled.div`
  position: absolute;
  top: 0px;
  height: 60px;
  width: calc(100% - 40px);
  // max-width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px 5px 0 0;
  background-color: rgb(100, 100, 100, 0.7);
  color: white;
  font-weight: bold;
  justify-content: center;
`;

const Description = styled.div`
  position: absolute;
  height: 100%;
  width: 90%;
  top: 30%;
  left: 5%;
  text-align: center;
  }
`;

const Actions = styled.div`
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;
  font-size: 16px;
  background-color: white;
  z-index: 100;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 25%; /* <-- put left edge in the middle */
    margin-left: -20%; /* <-- shift to the left by half of the width */
    width: 90%;
    height: 1px;
    background: #ddd;
  }
`;

const ActionsLeft = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  color: ${colors.fontSubtle};
  font-weight: bold;
  align-items: center;
`;

const ActionsCenter = styled.div`
  color: ${colors.fontSubtle};
  font-weight: bold;
  align-items: center;
`;

const ActionsRight = styled.div`
  cursor: pointer;
  margin-right: 20px;
  font-size: 30px;
`;

const Icon = styled.div`
  opacity: 0.6;
  transition: all 500ms;

  &:hover {
    opacity: 1;
  }
`;

const tempUrl =
  "https://i1.wp.com/s3.eu-west-2.amazonaws.com/fifteen-uploads/uploads/2018/04/1-2-1.jpg?fit=1442%2C795&ssl=1";

function CirclesCard(props) {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);

  return (
    <Card>
      <section
        style={{ height: "100%", width: "100%" }}
        onClick={() => {
          dispatch(selectCircle(props.circleData));
          dispatch(push(`${paths.circle}/${props.circleID}`));
        }}
      >
        <Overlay
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setTimeout(() => setIsHover(false), 50)}
        >
          {isHover && props.description && (
            <EasyTransition
              path={window.location.pathname}
              initialStyle={{ color: "transparent" }}
              transition="color 0.6s ease-in-out"
              finalStyle={{ color: "white" }}
            >
              <Description>{props.description}</Description>
            </EasyTransition>
          )}
        </Overlay>
        {props.name && <Name>{props.name}</Name>}

        <Img src={tempUrl} loader={<CircleLoader />} />
      </section>

      <Actions>
        <ActionsLeft>
          {props.participants && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <FcConferenceCall
                style={{ marginRight: "10px", fontSize: "40px" }}
              />
              <span>{props.participants}</span>
            </div>
          )}
        </ActionsLeft>
        <ActionsCenter>
          {props.status && <span>{props.status}</span>}
        </ActionsCenter>
        <ActionsRight>
          <Icon data-tip data-for={`support-${props.circleID}`}>
            <FcLike />
          </Icon>
          <ReactTooltip
            multiline={false}
            id={`support-${props.circleID}`}
            place="top"
            className="tooltip"
          >
            <p>Support them with some love!</p>
          </ReactTooltip>
        </ActionsRight>
      </Actions>
    </Card>
  );
}

export default CirclesCard;
