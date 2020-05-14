import React from "react";
import { useSelector } from "react-redux";
import { viewState } from "./setViewSlice";

// import components
import { Loading, FadeIn, Hero, Container, Header } from "components";
import TasksView from "./TasksView";
import CirclesView from "./CirclesView";
import ViewSelect from "./ViewSelect";

function Home() {
  const { view } = useSelector(viewState);
  const [circles, tasks] = ["circles", "tasks"];

  return (
    <Loading loading={false}>
      <FadeIn>
        <Hero color="info" size="s" center>
          <Container fluid center>
            <Header subtitle>Your next event is the 6th of May</Header>
          </Container>
        </Hero>
        <ViewSelect />
        {/*  toggle between Circles view && Tasks view */}
        {view === circles ? <CirclesView /> : <TasksView />}
      </FadeIn>
    </Loading>
  );
}

export default Home;
