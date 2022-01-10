import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";
import { RESUME_DATA } from "../../utils/resumeData";
import { EDUCATION_MAP, WORK_EXPERIENCE_MAP} from "../../utils/skills";
import { TimeLine } from "../../components/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import { CustomTimeLineSeperator } from "../../components/Timeline/TimeLine";
import TimelineContent from "@material-ui/lab/TimelineContent";


const StyledWorkOutlineOutlinedIcon = styled(WorkOutlineOutlinedIcon)`
  && {
    color: white;
  }
`;
const StyledSchoolOutlinedIcon = styled(SchoolOutlinedIcon)`
  && {
    color: white;
  }
`;
const SeeMoreButton = styled.button`
  background: none;
  /* color: #fb89bc; */
  border: none;
  padding: 0;
  font-size: 12px;
`;
const StyledLink = styled.a`
  text-decoration: none;
  /* color: #fb89bc; */
  font-size: 12px;
  /* &: hover {
    color: #f61379;
  } */
`;

const StyledTypographyAboutMe = styled(Typography)`
  && {
    color: darkslategray;
    font-size: 13px;
    line-height: 32px;
    white-space: pre-line;
  }
`;

const StyledTypographyTitle = styled(Typography)`
  && {
    font-size: 15px;
    font-weight: 500;
    /* color: #f83a90; */
  }
`;

const StyledTypographyDate = styled(Typography)`
  && {
    color: darkslategray;
  }
`;
const StyledTypographyDescription = styled(Typography)`
  && {
    color: gray;
    font-size: small;
    margin-top: 10px;
  }
`;

export const Resume = () => {
  const [displayText, setDisplayText] = useState("none");
  const [btnText, setBtnText] = useState("Read More...");

  const updateDisplayText = () => {
    displayText === "none" ? setDisplayText("inline") : setDisplayText("none");
    btnText === "Read More..."
      ? setBtnText("Read Less")
      : setBtnText("Read More...");
  };
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span className="title_span"></span>
          <h6 className="title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <StyledTypographyAboutMe variant="body2">
            {RESUME_DATA.AboutMe1}
            <br />
            {RESUME_DATA.AboutMe2}
          </StyledTypographyAboutMe>
        </Grid>
      </Grid>

      {/* Education And Experience */}

      <Grid item className="section_title mb_30">
        <span className="title_span"></span>
        <h6 className="title_text">Resume</h6>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          {/* experience */}
          <Grid item sm={12} md={6}>
            <TimeLine
              title="Work Experience"
              icon={<StyledWorkOutlineOutlinedIcon />}
            >
              {WORK_EXPERIENCE_MAP.map((workExperience) => {
                return (
                  <TimelineItem>
                    <CustomTimeLineSeperator />
                    <TimelineContent>
                      <StyledTypographyTitle>
                        {workExperience.title}
                      </StyledTypographyTitle>
                      <StyledTypographyDate variant="caption">
                        {workExperience.date}
                      </StyledTypographyDate>
                      <StyledTypographyDescription variant="body2">
                        {workExperience.description1}

                        <span style={{ display: displayText }}>
                          {workExperience.description2}
                        </span>
                      </StyledTypographyDescription>
                      <SeeMoreButton
                        onClick={() => {
                          updateDisplayText();
                        }}
                      >
                        {btnText}
                      </SeeMoreButton>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </TimeLine>
          </Grid>

          {/* Education */}
          <Grid item sm={12} md={6}>
            <TimeLine title="Education" icon={<StyledSchoolOutlinedIcon />}>
              {EDUCATION_MAP.map((education) => {
                return (
                  <TimelineItem>
                    <CustomTimeLineSeperator />
                    <TimelineContent>
                      <StyledTypographyTitle>
                        {education.name}
                      </StyledTypographyTitle>
                      <StyledTypographyAboutMe variant="body2">
                        {education.location}
                      </StyledTypographyAboutMe>
                      <StyledTypographyDate variant="caption">
                        {education.year}
                      </StyledTypographyDate>
                      <Typography variant="body2">
                        <StyledLink
                          href={education.publications}
                          target="_blank"
                        >
                          {education.publicationsTitle}
                        </StyledLink>
                      </Typography>
                      <StyledTypographyDescription variant="body2">
                        {education.description}
                      </StyledTypographyDescription>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </TimeLine>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;