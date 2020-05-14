import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { userState } from "containers/Login/loginSlice";
import { paths } from "utils/constants/.";

// components
import { Counter } from "containers/features/counter/Counter";
import { Banner, DirectoryBreadcrumb } from "components";
import Login from "containers/Login";
import Profile from "containers/Profile";
import Home from "containers/Home";
import CirclesBrowser from "containers/CirclesBrowser";
import Circle from "containers/Circle";
import Error from "containers/Error";

// PrivateRoutes
import PrivateRoute from "./PrivateRoute";

function App() {
  const user = useSelector(userState);
  const location = useSelector((state) => state.router).location.pathname;

  const {
    slash,
    login,
    register,
    counter,
    profile,
    home,
    browseCircles,
    circle,
  } = paths;

  const showDirectoryBreadcrumb =
    location.includes(home) ||
    location.includes(circle) ||
    location.includes(browseCircles) ||
    location.includes(profile);

  return (
    <>
      <Banner>Circles</Banner>
      {showDirectoryBreadcrumb && <DirectoryBreadcrumb />}
      <Switch>
        <Route exact path={slash} component={() => <Redirect to="/home" />} />
        <Route exact path={login} component={Login} />
        <Route exact path={register} />
        <Route exact path={counter} component={Counter} />
        <PrivateRoute exact path={profile} component={Profile} />
        <PrivateRoute exact path={home} component={Home} />
        <PrivateRoute exact path={browseCircles} component={CirclesBrowser} />
        <PrivateRoute path={`${circle}/:circleID`} component={Circle} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default App;
