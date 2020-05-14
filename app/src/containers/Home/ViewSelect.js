import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button as button, Container as container } from "components";
import styled from "styled-components";
import { setView, viewState } from "./setViewSlice";

const Button = styled(button)`
  border-radius: ${(props) => (props.left ? "5px 0 0 5px" : "0 5px 5px 0")};
  padding: 15px 70px;
`;

const Container = styled(container)`
  margin-top: 20px;
`;

function ViewSelect() {
  const dispatch = useDispatch();
  const { view } = useSelector(viewState);
  const [tasks, circles] = ["tasks", "circles"];

  const toggleView = (pointer) => {
    if (view === pointer) return;
    dispatch(setView(pointer));
  };

  return (
    <Container margin="xl">
      <Button
        color="dark"
        outline={view === tasks}
        left
        onClick={() => toggleView(circles)}
      >
        Circles
      </Button>
      <Button
        color="dark"
        outline={view === circles}
        right
        onClick={() => toggleView(tasks)}
      >
        Tasks
      </Button>
    </Container>
  );
}

export default ViewSelect;
