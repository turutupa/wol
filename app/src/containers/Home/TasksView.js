import React from "react";
import { TaskCard, Container, FadeIn, Header } from "components";
import NotificationsAndCalendar from "./NotificationsAndCalendar";
import circlesTimetable from "utils/circlesTimetable";

function Tasks(props) {
  const randomID = Math.random() * 999999;
  // this is a lot of  mock data
  const circleData = {
    id: randomID,
    name: "Public Speaking Toastmasters!",
    task: circlesTimetable[0].task,
    summary: circlesTimetable[0].summary,
    status: "started",
    participants: [
      { userId: 23424, name: "Alberto" },
      { userId: 2342, name: "Hans" },
    ],
    tasks: [{ description: "in your first task..." }],
    dueDate: new Date().toGMTString(),
    creationDate: new Date().toGMTString(),
    likes: 298,
  };

  const tasks = circlesTimetable
    .slice(0, 3)
    .map((t, i) => (
      <TaskCard
        circleData={circleData}
        name={circleData.name}
        task={t.task}
        summary={t.summary}
        description="more extensive description of the task..."
        week={i + 1}
        participants={Math.floor(Math.random() * 5) + "/5"}
        key={circleData.id + i}
      ></TaskCard>
    ));

  return (
    <FadeIn>
      <Container fluid row>
        <Container fluid column style={{ width: "100%" }}>
          <Container
            margin="xl"
            style={{ marginTop: "20px", marginBottom: "40px" }}
          >
            <Header subtitle>Pending Tasks</Header>
          </Container>
          {tasks}
        </Container>
        <Container fluid row style={{ marginTop: "90px" }}>
          <NotificationsAndCalendar />
        </Container>
      </Container>
    </FadeIn>
  );
}

export default Tasks;
