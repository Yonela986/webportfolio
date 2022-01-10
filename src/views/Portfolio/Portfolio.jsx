import React, { useState } from "react";
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions,
} from "@material-ui/core";
import { Projects } from "../../utils/resumeData";
import "./Portfolio.css";
import styled from "styled-components";

export const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setprojectDialog] = useState(false);

  const StyledLink = styled.a`
    color: #f962a6;
    cursor: pointer;
    font-size: 30px;
    /* &: hover {
      color: #b10653;
    } */
  `;
  const StyledTypographyDescription = styled(Typography)`
    && {
      color: gray;
      font-size: small;
    }
  `;
  const StyledDialogTitle = styled(DialogTitle)`
    && {
      font-size: 12px;
      font-weight: 500;
      color: #f83a90;
    }
  `;
  const StyledDialogImage = styled.img`
    height: 60px;
    width: 60px;
    margin-left: 40%;
  
  `;

  return (
    <Grid className="section pb_45 pt_45" spacing={1}>
      {/* title */}
      <Grid item className="section_title mb_20">
        <span className="title_span"></span>
        <h6 className="title_text">Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customtabs_item_active" : "customtabs_item"
            }
          />

          {[...new Set(Projects.map((item) => item.tag))].map((tag) => {
            return (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customtabs_item_active"
                    : "customtabs_item"
                }
              />
            );
          })}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3} className="top_30">
          {Projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card
                      className="custom_card"
                      onClick={() => setprojectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="custom_card_image"
                          image={project.logo_src}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className="custom_card_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="custom_card_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog open={projectDialog} onClose={() => setprojectDialog(false)}>
        <StyledDialogTitle onClose={() => setprojectDialog(false)}>
          {projectDialog.title}
        </StyledDialogTitle>
        <StyledDialogImage
          src={projectDialog.logo_src}
          alt="project icon"
          className="projectDialog_image"
        ></StyledDialogImage>
        <DialogContent>
          <StyledTypographyDescription className="projectDialog_description">
            {projectDialog.description}
          </StyledTypographyDescription>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <StyledLink
              href={link.link}
              target="_blank"
              className="projectDialog_icon"
            >
              {link.icon}
            </StyledLink>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;