import React, { useState } from "react";
import { Collapse as C } from "react-collapse";
import styled from "styled-components";
import { Card as card } from "components";
import { FcMenu } from "react-icons/fc";
import { colors } from "utils/constants/.";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const Header = styled.div`
  margin-left: 20px;
  transition: color 500ms;

  &:hover {
    color: black;
  }
`;

const Icon = styled.div`
  ${(props) => ({
    transition: "all 200ms",
    transform: props.rotate === "true" ? "rotate(90deg)" : "rotate(0deg)",
  })}
`;

const Card = styled(card)``;

const Paragraph = styled.div`
  padding: 20px 0 0 0;
  margin-left: 40px;
`;

function Collapse(props) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Wrapper>
      {props.header && (
        <Card>
          <strong
            onClick={() => setIsOpened(!isOpened)}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "100%",
              cursor: "pointer",
              color: isOpened ? "" : colors.fontSubtle,
            }}
          >
            <Icon rotate={isOpened ? "true" : "false"}>
              <FcMenu />
            </Icon>
            <Header style={{ cursor: "pointer" }}>
              <span style={{ marginRight: "8px" }}>Week {props.week}:</span>{" "}
              {props.header}
            </Header>
          </strong>
          {props.content && (
            <C isOpened={isOpened}>
              <Paragraph>{props.content}</Paragraph>
            </C>
          )}
        </Card>
      )}
    </Wrapper>
  );
}

export default Collapse;
