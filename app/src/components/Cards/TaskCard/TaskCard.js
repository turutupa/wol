import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors, paths } from "utils/constants/.";
import AnimateHeight from "react-animate-height";
import { FcInspection, FcCalendar } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { selectCircle } from "utils/selectCircleSlice";

const CardWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 100%;
  margin-bottom: 50px;
`;

const StyledCard = styled.section`
  display: flex;
  min-width: 350px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  // margin-top: 10px;
  margin-left: 120px;
  padding-left: 100px;
  padding-right: 10px;
  padding-top: 30px;
  padding-bottom: 60px;
  background-color: white;
  border-radius: 5px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardTitle = styled.section`
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardSubtitle = styled.div`
  color: ${colors.fontSubtle};
  // font-weight: bold;
  margin-bottom: 15px;
`;

const CardDescription = styled.section`
  text-align: justify;
  margin-right: 20px;
`;

const CardExpand = styled.div`
  margin-top: 20px;
  text-align: justify;
  margin-right: 20px;
`;

const CardFooter = styled.section`
  position: relative;
  bottom: -25px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
`;

const CardInfo = styled.section`
  color: ${colors.fontSubtle};
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const CardActions = styled.section`
  margin-left: 15px;
  padding-bottom: 15px;
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
  transition: color 300ms, border-right 300ms;
  border-right: 0px solid ${colors.primary};
  white-space: nowrap;

  &:hover {
    color: ${colors.primary};
    border-right: 5px solid ${colors.primary};
  }
`;

const StyledImg = styled.img`
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  height: 150px;
  left: 50px;
  top: 7%;
  // margin-top: 0.8%;
  // top: 0;
  // box-shadow: 0 1px 1rem;
  // border-style: solid;
  // border-color: ${colors.backgroundColor};
  // border-width: 25px;
`;

const StyledDate = styled.section`
  font-weight: bold;
  width: 100px;
  color: ${colors.primary};
  margin-right: 20px;
`;

const defaultImg = "https://www.w3schools.com/howto/img_avatar2.png";
const defaultImg2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRogE7DKEaVrGYR_kobPtbBP6W8msiDtjNgs8t_LC-_XneM4SHc&usqp=CAU";

function Card(props) {
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const circleID = props.circleID || Math.floor(Math.random() * 99999);

  return (
    <CardWrapper>
      <StyledImg
        src={props.img || defaultImg}
        onClick={() => {
          dispatch(selectCircle(props.circleData));
          dispatch(push(`${paths.circle}/${circleID}`));
        }}
      />
      <StyledCard>
        {props.week && (
          <div>
            <StyledDate>
              <span style={{ display: "flex", alignItems: "center" }}>
                Week {props.week}
                <FcCalendar style={{ fontSize: "30px", marginLeft: "5px" }} />
              </span>
            </StyledDate>
          </div>
        )}
        <CardContent>
          {props.name && <CardTitle>{props.name}</CardTitle>}
          {props.circle && <CardSubtitle>{props.circle}</CardSubtitle>}
          {props.task && <CardDescription>{props.task}</CardDescription>}

          {props.description && (
            <AnimateHeight
              duration={1000}
              height={isCollapsed ? 0 : "auto"}
              style={{ flexShrink: 0 }}
            >
              <CardExpand>
                <p>
                  <strong>Summary</strong>
                </p>
                {props.summary}
              </CardExpand>
            </AnimateHeight>
          )}

          <CardFooter>
            <CardInfo>
              {props.participants && (
                <span style={{ display: "flex", alignItems: "center" }}>
                  <FcInspection
                    style={{ fontSize: "30px", marginRight: "5px" }}
                  />{" "}
                  {props.participants} submitted task
                </span>
              )}
            </CardInfo>
            <CardActions onClick={() => setIsCollapsed(!isCollapsed)}>
              {isCollapsed ? "Read More" : "Read Less"}
            </CardActions>
          </CardFooter>
        </CardContent>
      </StyledCard>
    </CardWrapper>
  );
}

export default Card;
