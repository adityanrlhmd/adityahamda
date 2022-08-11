/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Puzzicle from '../../assets/recentprojects/puzzicle.png';
import Blackspot from '../../assets/recentprojects/blackspot.png';
import Cocktail from '../../assets/recentprojects/cocktail.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Puzzicle', 
      description: `Developed an animated landing page using LottieFiles for the hero element.`,
      alter: 'Puzzicle',
      image: `${Puzzicle}`,
    },
    { 
      id: 2,
      title: 'Blackspot Project', 
      description: `Geographic Information System that was created using the MERN stack to map blackspot data in Sukabumi City.`,
      alter: 'Blackspot Project',
      image: `${Blackspot}`,
    },
    { 
      id: 3,
      title: 'The Cocktail Project', 
      description: `The cocktail website was built using NextJS to design and develop the front-end.`,
      alter: 'The Cocktail Project',
      image: `${Cocktail}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title text-center">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
