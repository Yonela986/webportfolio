import React from "react";
import {Typography} from "@material-ui/core";
import {RESUME_DATA} from "../../utils/resumeData";
import styled from "styled-components";

const MainDiv = styled.div`
  background-color: #808B96;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  border-radius: 8px;
  padding: 20px 25px;
`;
const StyledNameTypography = styled(Typography)`
font-weight:500;
line-height:1.5rem;
`;

const StyledLink = styled.a`
  text-decoration:none;
  color:white;
`;

const StyledDesignTypography = styled(Typography)`
  font-size: 15px;
  text-align: end;
`;
export const Footer = () => {
  return (
    <MainDiv>
      <div>
        <StyledNameTypography>
          {RESUME_DATA.name}
          <br/>
          {RESUME_DATA.title}
        </StyledNameTypography>
      </div>
      <div>
        <StyledDesignTypography>
        developed by{" "}
          <StyledLink href="/" target="_blank">
            {RESUME_DATA.name}
          </StyledLink>
        </StyledDesignTypography>
      </div>
    </MainDiv>
  );
};

export default Footer;