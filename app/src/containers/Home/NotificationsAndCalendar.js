import React from "react";
import { Container, Calendar } from "components";

function NotificationsAndCalendar() {
  return (
    <Container margin="l">
      <p style={{ marginTop: 0, paddingTop: 0 }}>
        <strong>Notifications</strong>
      </p>
      <p> - </p>
      <p style={{ marginTop: 0, paddingTop: 0 }}>
        <strong>Upcoming events</strong>
      </p>
      <Calendar />
    </Container>
  );
}

export default NotificationsAndCalendar;
