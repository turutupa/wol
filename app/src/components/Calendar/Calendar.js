import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import "./Calendar.css";

function StyledCalendar(props) {
  return <Calendar {...props} />;
}

export default StyledCalendar;
