import React from "react";
import styled from "styled-components";
import { SERVICES_MAP, TECH_STACK_MAP } from "../../utils/skills";
import { Grid, Typography, Icon, Paper } from "@material-ui/core";
import TimelineDot from "@material-ui/lab/TimelineDot";

const StyledServiceIcon = styled(Icon)`
  && {
    color: darkslategray;
  }
`;

const StyledTypographyTitle = styled(Typography)`
  && {
    margin-bottom: 2rem;
    font-size: 15px;
    font-weight: 500;
  }
`;

const StyledTypographyDescription = styled(Typography)`
  && {
    color: #808B96;
    font-size: small;
    margin-top: 10px;
  }
`;

const StyledTimelineDot = styled(TimelineDot)`
  && {
    border-color: #808B96;
    padding: 2px;
    margin-right: 5px;
  }
`;

const StyledPaper = styled(Paper)`
&&{
  border-radius: 8px;
padding: 10px;
box-shadow: 0px 0px 48px 0px rgba(4, 6, 4, 0.08)
/* height : 100%; */
}`;
const StyledSkillTypography = styled(Typography)`
  && {
    display: flex;
    align-items: center;
    color: #989898;
    font-weight: 400;
    line-height: 18px;
  }
`;

const StyledContainer = styled(Grid)`
  && {
    flex-direction: column;
  }
`;
// const StyledLogo = styled.img`
//   height: 45px;
//   width: auto;
//   border-radius: 50%;
// `;

const StyledUl = styled.ul`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 2rem;
`;
const StyledLi = styled.li`
  //  flex: 0 1 calc(20% - 8px);
  /* padding-top: 0.1rem; */
  padding-bottom: 1rem;
  margin: 1rem;
 
`;

const StyledIconsGrid = styled(Grid)`
  && {
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

export const Skills = () => {
  return (
    <StyledContainer>
      {/* Skills */}
      <Grid item className="section_title mb_30">
        <span className="title_span"></span>
        <h6 className="title_text">Skills And Languages</h6>
      </Grid>

      <StyledIconsGrid item xs={12}>
        <StyledUl>
          {TECH_STACK_MAP.map((skill) => {
            return skill.description.map((language) => {
              return (
                <StyledLi>
                  {/* <StyledLogo src={language.logo_src} alt="language logo" /> */}
                </StyledLi>
              );
            });
          })}
        </StyledUl>
      </StyledIconsGrid>

      <Grid
        container
        spacing={3}
        justifyContent="space-around"
        className="section pb_45"
      >
        {TECH_STACK_MAP.map((skill) => {
          return (
            <Grid item xs={12} sm={6} md={3} >
              <StyledPaper elevation={5}>
                <StyledTypographyTitle variant="h6">
                  {skill.title}
                </StyledTypographyTitle>

                {skill.description.map((language) => {
                  return (
                    <StyledSkillTypography variant="body2">
                      <StyledTimelineDot variant="outlined" />
                      {language.name}
                    </StyledSkillTypography>
                  );
                })}
              </StyledPaper>
            </Grid>
          );
        })}
      </Grid>

      <Grid container>
        <Grid item className="section_title mb_60 top_60">
          <span className="title_span"></span>
          <h6 className="title_text">My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            {SERVICES_MAP.map((service) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <StyledServiceIcon>{service.icon}</StyledServiceIcon>
                  <StyledTypographyTitle variant="h6">
                    {service.title}
                  </StyledTypographyTitle>
                  <StyledTypographyDescription variant="body2">
                    {service.description}
                  </StyledTypographyDescription>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {/* </Grid> */}
    </StyledContainer>
  );
};

export default Skills;