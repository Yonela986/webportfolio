import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
// import {BrowserRouter as Router} from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import { RESUME_DATA } from "../../utils/resumeData";
import CustomButton from "../../components/CustomButton";
import { withRouter } from "react-router";
import uuid from "react-uuid";
import tokens from "../../data/tokens";

import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  && {
    margin-bottom: 30px;
    background-color: white;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
  }
`;

const StyledNavLink = styled(Nav.Link)`
  && {
    font-weight: 500;
    color: rgba(0,0,0,.55);
  }`;

const StyledHomeOutlined = styled(HomeRounded)`
  && {
    color: white;
    width: 32px;
    height: 32px;
  }
`;

const RoundDiv = styled.div`
  justify-content: center;
  display: flex;
  width: 60px;
  height: 50px;
  border: 1px white;
  background-color: ${tokens.colors.flickrPink};
  align-items: center;
  margin-bottom: -35px;
  border-radius: 5px;
`;

const StyledSocialsDiv = styled.div`
display:flex;
align-items: center;
`;

const StyledLink = styled.a`
  font-size: 14px;
  margin-right: 12px;
  color: #808B96;
  /* &: hover {
    color: #ec096f;
  } */
`;

const StyledHireMeLink = styled.a`
  text-decoration: none;
  color: #808B96;
`;

const StyledNav = styled(Nav)`
&&{
  margin-right: auto;
}`

export const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <StyledNavbar expand="lg" sticky="top">
      {/* Home link */}
      <StyledNavLink href="/">
        <Navbar.Brand>
          <RoundDiv>
            <StyledHomeOutlined />
          </RoundDiv>
        </Navbar.Brand>
      </StyledNavLink>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <StyledNav>
          {/* Resume link */}
          <StyledNavLink href="/" active={pathName === "/" ? true : false}>
            Resume
          </StyledNavLink>

          {/* Skills */}
          <StyledNavLink
            href="/skills"
            active={pathName === "/skills" ? true : false}
          >
            Skills
          </StyledNavLink>
          {/* Porfolio link */}
          <StyledNavLink
            href="/portfolio"
            active={pathName === "/portfolio" ? true : false}
          >
            Portfolio
          </StyledNavLink>

          {/* Contact link */}
          {/* <StyledNavLink
            href="/contactme"
            active={pathName === "/contactme" ? true : false}
          >
            Contact Me
          </StyledNavLink> */}
        </StyledNav>
        <StyledSocialsDiv>
          {Object.keys(RESUME_DATA.socials).map((socialMedia) => {
            return (
              <StyledLink
                href={RESUME_DATA.socials[socialMedia].link}
                alt={RESUME_DATA.socials[socialMedia].text}
                target="_blank"
                key={uuid()}
              >
                {RESUME_DATA.socials[socialMedia].icon}
              </StyledLink>
            );
          })}
          <StyledHireMeLink href={`mailto:${RESUME_DATA.emailAdress}`}>
            <CustomButton text="Hire Me" icon={<Telegram />} />
          </StyledHireMeLink>
        </StyledSocialsDiv>
      </Navbar.Collapse>
      {/* </Navbar.Toggle> */}
    </StyledNavbar>
  );
};

export default withRouter(Header);