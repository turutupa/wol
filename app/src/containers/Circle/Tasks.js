import React, { useState } from "react";
import { Container as container, Card, Collapse } from "components";
import styled from "styled-components";
import tasks from "utils/circlesTimetable";

const Container = styled(container)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

function renderTasks(tasks) {
  return tasks.map((t, i) => (
    <Collapse header={t.task} content={t.summary} key={i} week={i + 1} />
  ));
}

function Tasks() {
  return <Container>{renderTasks(tasks)}</Container>;
}

export default Tasks;
