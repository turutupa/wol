import React, { useState, useEffect } from "react";
import {
  FullScreenContainer,
  TextInput as textinput,
  Button as button,
  Spinner,
  Loading,
  FadeIn,
  Container as container,
} from "components";
import { useDispatch } from "react-redux";
import { login, logout, loginAsync, userState } from "./loginSlice";
import styled from "styled-components";

const Container = styled(container)`
  display: flex;
  align-items: center;
  margin-top: 15%;
  text-align: center;
`;

const TextInput = styled(textinput)`
  margin: 0 0 30px 0;
`;

const Button = styled(button)`
  width: 100%;
  padding: 0.5em 0;
`;

const Label = styled.div`
  margin-bottom: 20px;
`;

function Login(props) {
  // will have to handle on login error
  // const user = useSelector(userState);
  const dispatch = useDispatch();
  const [loginInit, setLoginInit] = useState(false);

  // fake credentials to test login
  const credentials = {
    name: "alberto",
    email: "a.delgado@sap.com",
    id: 2342,
  };

  return (
    <FadeIn>
      <FullScreenContainer>
        {loginInit && (
          <Loading spinner loading={loginInit}>
            <Spinner />
          </Loading>
        )}
        <Container>
          <Label>Email</Label>
          <TextInput placeholder="user@sap.com" />
          <Label>Password</Label>
          <TextInput placeholder="******" type="password" />
          <Button
            margin="l"
            onClick={() => {
              setLoginInit(true);
              dispatch(loginAsync(credentials));
            }}
          >
            Login!
          </Button>
          <span>Feel the power of circles, circle your life.</span>
        </Container>
      </FullScreenContainer>
    </FadeIn>
  );
}

export default Login;
