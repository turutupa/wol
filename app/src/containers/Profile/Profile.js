import React from "react";

import { FadeIn } from "components";
// Components
import Banner from "./Banner";
import ProfileInformation from "./ProfileInformation";
import Hobbies from "./Hobbies";

function Profile(props) {
  return (
    <FadeIn>
      <Banner />
      <ProfileInformation />
    </FadeIn>
  );
}

export default Profile;
