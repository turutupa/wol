import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { sizes, paths } from "utils/constants/.";
import { TextInput } from "components";
import button from "../Buttons/Button/index";
import { logoutAsync } from "containers/Login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { colors } from "utils/constants/.";
import { FcSearch } from "react-icons/fc";
import { setView } from "containers/Home/setViewSlice";

const StyledBanner = styled.section`
  position: relative;
  width: 100%;
  height: ${sizes.bannerHeight};
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const RightSideBanner = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-right: -5px;
`;

const LeftSideBanner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 10px;
`;

const CenterBanner = styled.div`
  position: absolute;
  left: 40%;
`;

const Logo = styled.div`
  position: absolute;
  left: -20px;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 70%;
  background-color: ${colors.primary};
  height: 150px;
  width: 130px;
  display: flex;
  text-align: center;
  align-items: center;
  font-weight: bold;
`;

const Button = styled(button)`
  margin: 0;
  heigth: 60px;
  padding: 30px 40px;
`;

const TextLogo = styled.div`
  position: absolute;
  left: 45px;
  font-size: 42px;
  mix-blend-mode: overlay;
  color: white;
  margin-left: 13px;
`;

const Banner = function (props) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.router.location);
  const [showContent, setShowContent] = useState(false);
  const tasks = "tasks";

  useEffect(() => {
    if (location) {
      if (
        !location.pathname.includes(paths.home) &&
        !location.pathname.includes(paths.profile) &&
        !location.pathname.includes(paths.browseCircles) &&
        !location.pathname.includes(paths.circle)
      ) {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    }
  }, [location, showContent]);

  return (
    <StyledBanner>
      <LeftSideBanner>
        <Logo
          onClick={() => {
            dispatch(setView(tasks));
            dispatch(push(paths.home));
          }}
        >
          <TextLogo>{props.children}</TextLogo>
        </Logo>

        {showContent && (
          <CenterBanner>
            <TextInput icon={FcSearch} noShadow placeholder="Search Circles" />
          </CenterBanner>
        )}
      </LeftSideBanner>
      {showContent && (
        <RightSideBanner>
          <Button color="primary" onClick={() => dispatch(push(paths.profile))}>
            Profile
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => dispatch(logoutAsync())}
          >
            Sign out
          </Button>
        </RightSideBanner>
      )}
    </StyledBanner>
  );
};

export default Banner;
