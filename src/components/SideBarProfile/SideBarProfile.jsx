import React from "react";
import { Typography } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CustomButton from "../CustomButton";
import GetAppSharpIcon from "@material-ui/icons/GetAppSharp";
import uuid from "react-uuid";

import tokens from "../../data/tokens";
import styled from "styled-components";

import CustomTimeLine, { CustomTimeLineSeperator } from "../Timeline/TimeLine";
import { RESUME_DATA } from "../../utils/resumeData";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";

const ProfileDiv = styled.div`
  display: inline-block;
  background-color: white;
  border-radius: ${tokens.radius.subtle};
  width: 100%;
`;
const ProfileName = styled.div`
  line-height: ${tokens.spacing.m};
  padding: ${tokens.spacing.l};
`;

const StyledTypography = styled(Typography)`
  && {
    font-size: 13.5px;
    color: #787878;
    font-weight: 400;
  }
`;
const NameTypography = styled(Typography)`
  && {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
  }
`;
const TitleTypography = styled(Typography)`
  && {
    font-size: 1rem;
    color: #777;
  }
`;
const StyledIcon = styled(GetAppSharpIcon)`
  && {
    font-size: 1rem;
    color: #808B96;
  }
`;

const PersonIcon = styled(PersonOutlineIcon)`
  && {
    font-size: 1.2rem;
    color: rgb(242, 240, 240);
  }
`;
const StyledTimelineContent = styled(TimelineContent)`
  && {
    margin-top: 2px;
    margin-bottom: 12px;
  }
`;
const ProfileInfoDiv = styled.div`
  top: 0;
  left: 0;
  margin: -40px 50px 30px;
`;
const ButtonDiv= styled.div`
width:100%;
display:flex;
justify-content:center;
margin-top:1.25rem;
`
const Figure = styled.figure`
 margin-top: -10px;
    -webkit-clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
    clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
    `;
    const StyledLink = styled.a`
      color: #787878;
      text-decoration: none;
      /* &: hover {
        color: #f61379;
      } */
    `;

     const StyledSpan = styled.span`
       color: black;
     `;
const Image = styled.img`
  width: 100%;
`;
const CustomTimeLineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimeLineSeperator />
      <StyledTimelineContent>
        {link ? (
          <StyledTypography>
            <StyledSpan>{title}:</StyledSpan>
            <StyledLink href={link} target="_blank">
              {text}
            </StyledLink>
          </StyledTypography>
        ) : (
          <StyledTypography>
            <StyledSpan>{title}:</StyledSpan>
            {text}
          </StyledTypography>
        )}
      </StyledTimelineContent>
    </TimelineItem>
  );
};

export const SideBarProfile = () => {
  return (
    <ProfileDiv className="container_shadow">
      <ProfileName>
        <NameTypography>{RESUME_DATA.name}</NameTypography>
        <TitleTypography>{RESUME_DATA.title}</TitleTypography>
      </ProfileName>

      {/* <Figure>
        <Image
          src={`/Images/picture-main.jpg`}
          alt="YonelaFuthoPhoto"
        ></Image>
      </Figure> */}

      <ProfileInfoDiv>
        <CustomTimeLine icon={<PersonIcon />}>
          <CustomTimeLineItem title="Name" text={` ${RESUME_DATA.name}`} />
          <CustomTimeLineItem title="Title" text={` ${RESUME_DATA.title}`} />
          <CustomTimeLineItem
            title="Email"
            text=" Email Me"
            link={`mailto:${RESUME_DATA.emailAdress}`}
          />

          {Object.keys(RESUME_DATA.socials).map((key) => {
            return (
              <CustomTimeLineItem
                key={uuid()}
                title={key}
                text={` ${RESUME_DATA.socials[key].text}`}
                link={RESUME_DATA.socials[key].link}
              ></CustomTimeLineItem>
            );
          })}
        </CustomTimeLine>
        <ButtonDiv>
          <StyledLink
            href={`${process.env.PUBLIC_URL}/Downloads/Yonela Futho - Resume - 2021 (Original).pdf`}
            download
            target="_blank"
          >
            <CustomButton text={"Download Cv"} icon={<StyledIcon />} />
          </StyledLink>
        </ButtonDiv>
      </ProfileInfoDiv>
    </ProfileDiv>
  );
};

export default SideBarProfile;