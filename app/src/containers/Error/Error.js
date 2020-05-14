import React from "react";
import { FullScreenContainer, Button } from "components";

function Error() {
  return (
    <FullScreenContainer>
      Oops! Seems like this page doesn't exist!
      <Button margin="xl" to="/">
        Go Home
      </Button>
    </FullScreenContainer>
  );
}

export default Error;
