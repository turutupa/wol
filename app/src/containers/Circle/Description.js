import React from "react";
import { Container, Card, Header, Button as button } from "components";
import styled from "styled-components";
import { FcApprove, FcParallelTasks } from "react-icons/fc";

const Wrapper = styled(Container)`
  margin-top: 30px;
  margin-right: 0px;
  padding-right: 3.5%;
`;

const Bullet = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  width: 50%;
`;

const BulletWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-align: center;
  flex-direction: row;
`;

const StickyContainer = styled(Container)`
  height: 100%;
`;

const Button = styled(button)`
  margin-bottom: 20px;
  width: 100%;
  min-width: 250px;
  padding: 15px 20px;
`;

const Icon = styled.div`
  font-size: 40px;
  padding-right: 15px;
`;

function BulletPoints(info) {
  return (
    <Bullet key={info}>
      <Icon>
        <FcApprove />
      </Icon>
      {info}
    </Bullet>
  );
}

function renderInfo(info) {
  return <BulletWrapper>{info.map((i) => BulletPoints(i))}</BulletWrapper>;
}

function Description() {
  const mockData = [
    "Duration of 3 months of pure learning!",
    "Availability for up to 8 participants!",
    "Skills you'll learn: public speaking, closing deals, aid assited presentations, IMPACT!",
    "See weekly improvements!",
  ];

  return (
    <Wrapper row>
      <Card>
        <Header style={{ textAlign: "left" }} type="h6" bold>
          Circle information
        </Header>
        {renderInfo(mockData)}
      </Card>
      <StickyContainer margin="s">
        <Card>
          <p style={{ textAlign: "center" }}>
            <strong>This circle starts in 7 days!</strong>
          </p>
          <Button>Join circle!</Button>
          <Button
            outline
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "55px",
                top: "10px",
                fontSize: "30px",
              }}
            >
              <FcParallelTasks />
            </span>
            Share
          </Button>
        </Card>
      </StickyContainer>
    </Wrapper>
  );
}

export default Description;
