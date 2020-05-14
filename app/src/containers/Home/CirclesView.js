import React from "react";
import {
  Loading,
  FadeIn,
  Container,
  Grid,
  CirclesCard,
  Header,
} from "components";
import circlesTimetable from "utils/circlesTimetable";
import CreateNewCircle from "./CreateNewCircle";

function Circles() {
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

  const circlesCards = new Array(4).fill(0).map((e, i) => {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <CirclesCard
          circleData={circleData}
          name={circleData.name}
          task={circleData.task}
          summary={circleData.summary}
          description="more extensive description of the task..."
          status={(i === 0 ? "in process" : "closed").toUpperCase()}
          date={circleData.creationDate}
          participants={i === 0 ? "4/5" : "5/5"}
          key={circleData.id}
          circleID={circleData.id}
        ></CirclesCard>
      </div>
    );
  });

  return (
    <Loading>
      <FadeIn>
        <Container
          margin="xl"
          style={{ marginTop: "20px", marginBottom: "60px" }}
        >
          <CreateNewCircle />
          {/* show your subscribed circle */}
          <Header subtitle style={{ marginBottom: "20px" }}>
            Your Circles
          </Header>
          <Grid items={circlesCards.slice(0, 1)}></Grid>
          {/* complleted circles! */}
          <Header subtitle style={{ marginBottom: "20px" }}>
            Completed Circles
          </Header>
          <Grid items={circlesCards.slice(1)}></Grid>

          {/* perhaps show recommended circles */}
          {/* <Header subtitle>Recommended Circles</Header>
          <Grid items={circlesCards}></Grid> */}
        </Container>
      </FadeIn>
    </Loading>
  );
}

export default Circles;
