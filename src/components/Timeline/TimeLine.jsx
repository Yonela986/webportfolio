import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import "./Timeline.css";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledTimeline = styled(Timeline)`
  && {
    padding: 0;
  }
`;

const FirstItem = styled(TimelineItem)`
  && {
    min-height: 5rem;
  }
`;

const StyledHeaderDot = styled(TimelineDot)`
  && {
    color: black;
    /* background-color: #f72585; */
    font-size: small;
    padding: 10px;
    margin-left:-18px;
  }
`;
const StyledTimelineConnector = styled(TimelineConnector)`
&&{
  margin-left: -15px;
}
`;
const StyledTimelineDot = styled(TimelineDot)`
  && {
    color: black;
    /* border-color: #f72585; */
    width: 5px;
    height: 5px;
    padding: 2px;
  }
`;
const StyledTypography = styled(Typography)`
  && {
    padding-top: 7px;
  }
`;
const StyledTimelineContent = styled(TimelineContent)`
  && {
    padding-top: 0px;
    margin-bottom: 20px;
  }
`;

export const TimeLine = ({ title, children, icon }) => {
  return (
    <StyledTimeline>
      {/* {item header} */}
      <FirstItem>
        <TimelineSeparator>
          <StyledHeaderDot>{icon}</StyledHeaderDot>

          <StyledTimelineConnector />
        </TimelineSeparator>
        <StyledTimelineContent>
          <StyledTypography variant="h6">{title}</StyledTypography>
        </StyledTimelineContent>
      </FirstItem>
      {children}
    </StyledTimeline>
  );
};

export const CustomTimeLineSeperator = () => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <StyledTimelineDot variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
    </TimelineItem>
  );
};

export default TimeLine;
