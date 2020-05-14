import React from "react";
import { useSelector } from "react-redux";
import {
  Loading,
  FadeIn,
  Grid,
  CirclesCard,
  Header,
  Container,
} from "components";

function CirclesBrowser() {
  // this is a lot of  mock data
  const circleData = {
    name: "Public Speaking ToastMasters!",
    description:
      "This is a Circle dedicated to the learning of verbally abusing and ensuring the greatness of whatever is I am writing right now",
    participants: [
      { userId: 23424, name: "Alberto" },
      { userId: 2342, name: "Hans" },
    ],
    tasks: [{ description: "in your first task..." }],
    dueDate: new Date().toGMTString(),
    creationDate: new Date().toGMTString(),
    likes: 298,
  };

  const circlesCards = new Array(9).fill(0).map((e, i) => {
    const randomID = Math.random() * 999999;
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <CirclesCard
          circleData={circleData}
          key={randomID}
          participants={
            Math.floor(Math.random() * 3 + 1) +
            "/" +
            Math.floor(Math.random() * 4 + 3)
          }
          name="Public Speaking!"
          status="OPEN"
          description="The public speaking team are gathering together once every week to become the best orators in the galaxy!"
          circleID={randomID}
        ></CirclesCard>
      </div>
    );
  });

  return (
    <Loading>
      <FadeIn>
        <Container margin="xl" style={{ marginTop: "20px" }}>
          {/* show your subscribed circles */}
          <Grid items={circlesCards}></Grid>

          {/* perhaps show recommended circles */}
          {/* <Header subtitle>Recommended Circles</Header>
          <Grid items={circlesCards}></Grid> */}
        </Container>
      </FadeIn>
    </Loading>
  );
}

export default CirclesBrowser;
