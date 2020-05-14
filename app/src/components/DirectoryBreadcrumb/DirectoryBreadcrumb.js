import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Container } from "components";
import { colors, paths } from "utils/constants/.";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { viewState } from "containers/Home/setViewSlice";
import { circleState } from "utils/selectCircleSlice";

const StyledDirectory = styled.div`
  display: flex;
  height: 30px;
  padding-top: 10px;
  border-bottom: 1px solid lightgrey;
`;

const Root = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

const Division = styled.div`
  margin: 0 20px;

  &:before {
    content: ">";
  }
`;

const Subpath = styled.div`
  font-color: ${colors.fontSubtle};
  cursor: pointer;
`;

function DirectoryBreadcrumb(props) {
  const dispatch = useDispatch();
  const directory = useSelector((state) => state.router).location.pathname;
  const from = useSelector(viewState).view;
  const circle = useSelector(circleState).circle;

  useEffect(() => {}, [directory]);

  let root, subpath, rootRedirect, subpathRedirect;

  if (directory.includes(paths.circle) || directory.includes(paths.home)) {
    root = "Home";
    subpath = from;
    subpath = subpath.charAt(0).toUpperCase() + subpath.slice(1);
    rootRedirect = push(paths.home);
    subpathRedirect = push(paths.home);
  } else if (directory.includes(paths.browseCircles)) {
    root = "Browse Circles";
    subpath = "Choose a category or search by name!";
    rootRedirect = push(paths.browseCircles);
    subpathRedirect = push(paths.browseCircles);
  } else if (directory.includes(paths.profile)) {
    root = "Profile";
    subpath = "Edit your profile!";
    rootRedirect = push(paths.profile);
    subpathRedirect = push(paths.profile);
  }

  return (
    <StyledDirectory>
      <Container margin="xl" row>
        <Root onClick={() => dispatch(rootRedirect)}>{root}</Root>
        <Division />
        <Subpath onClick={() => dispatch(subpathRedirect)}>{subpath}</Subpath>
        {directory.includes(paths.circle) && (
          <>
            <Division />
            <Subpath>{circle.name}</Subpath>
          </>
        )}
      </Container>
    </StyledDirectory>
  );
}

export default DirectoryBreadcrumb;
