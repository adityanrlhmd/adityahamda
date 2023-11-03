/* eslint-disable no-unused-vars */
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import resume from "../../settings/resume.json";
import { TextDecrypt } from "../content/TextDecrypt";

import './About.css';

import profile from '../../assets/poto-me.png';

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="!bg-center !bg-cover _img"
            style={{ 
              background: "url(" + profile + ")",
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {resume.basics.description}
            </p>
            <a href="#contact" className="p-1 transition-all duration-300 rounded hover:text-white hover:bg-primary">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
