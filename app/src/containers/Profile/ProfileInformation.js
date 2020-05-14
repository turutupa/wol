import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Container as container,
  Card,
  Header,
  TextInput as inputText,
} from "components";
import Switch from "react-switch";

import Hobbies from "./Hobbies";

const Container = styled(container)`
  margin-top: 40px;
  margin-bottom: 60px;
  position: relative;
`;

const TextInput = styled(inputText)`
  box-shadow: none;
`;

const Label = styled.div`
  margin-left: 10px;
  margin-top: 20px;
`;

const Row = styled.div`
  margin-top: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Col = styled.div`
  flex-direction: column;
  width: 50%;
`;

const TogglePublic = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 100px;
  top: 30px;
`;

const PublicLabel = styled.div`
  margin-right: 20px;
`;

function renderInputs(data) {
  return data.map((d) => (
    <Col key={d.name}>
      <Label>{d.label}</Label>
      <TextInput name={d.name} placeholder={d.placeholder} />
    </Col>
  ));
}

const formData = [
  {
    label: "Name*",
    name: "name",
    placeholder: "Mr. Awesome!",
  },
  {
    label: "Twitter",
    name: "twitter",
    placeholder: "@username",
  },
  {
    label: "Email*",
    name: "email",
    placeholder: "awesome@gmail.com",
  },
  {
    label: "Facebook",
    name: "facebook",
    placeholder: "https://www.facebook.com/MrAwesome",
  },
  {
    label: "Linkedin",
    name: "linkedin",
    placeholder: "https://www.linkedin.com/in/MrAwesome",
  },
];

function ProfileInformation() {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <Container>
      <Card>
        <Header type="h6" bold={false}>
          Update your profile with your latest info!
        </Header>
        <TogglePublic>
          <PublicLabel>Make profile public</PublicLabel>
          <Switch onChange={() => setIsPublic(!isPublic)} checked={isPublic} />
        </TogglePublic>

        <Row>{renderInputs(formData)}</Row>
        <Hobbies />
      </Card>
    </Container>
  );
}

export default ProfileInformation;
