/* eslint-disable no-unused-vars */
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

import { imageProjects } from "./image-projects";
import { Container } from "@material-ui/core";

const { cuantv, hodler, leslar, phantom, prestige, rooma } = imageProjects;

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    padding: "3rem 0",
    maxWidth: "80rem",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [projects] = useState([
    {
      title: "Prestige Promotions",
      alter: "Company Profile",
      category: "Web",
      image: prestige,
      link: "https://prestigepromotions.id",
      stacks: [
        "NextJS",
        "TailwindCSS",
        "Framer Motions",
        "TypeScript",
        "Directus",
      ],
    },
    {
      title: "Phantom",
      alter: "Booking App",
      category: "Web",
      image: phantom,
      link: "https://phantomclub.id",
      stacks: ["NextJS", "TailwindCSS", "Ant Design", "Zustand", "Supabase"],
    },
    {
      title: "Hodler",
      alter: "Cryptocurrency web.",
      category: "Web",
      image: hodler,
      link: "https://www.hodler.site",
      stacks: ["NextJS", "TailwindCSS", "TypeScript"],
    },
    {
      title: "Rooma",
      alter: "Interior Design Reservations",
      category: "Web",
      image: rooma,
      link: "https://rooma.co.id",
      stacks: ["NextJS", "TailwindCSS", "Supabase"],
    },
    {
      title: "Cuan TV",
      alter: "Multi-purpose video platform with Web3",
      category: "Mobile",
      image: cuantv,
      link: "https://play.google.com/store/apps/details?id=com.leslarmetaverse.cuantv&pli=1",
      stacks: ["React Native", "Moralis", "Web3"],
    },
    {
      title: "Leslar Metaverse",
      alter: "Blockchain Web",
      category: "Web",
      image: leslar,
      link: "https://www.leslarmetaverse.com",
      stacks: ["NextJS", "TailwindCSS", "Moralis", "Web3"],
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.container} maxWidth="md">
        <>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 project">
            {projects.map((project, index) => (
              <div
                className="flex flex-col transition-all duration-300 group hover:scale-110 max-w-"
                key={index}
              >
                <figure className="w-full">
                  <img src={project.image} alt={project.alter} />
                </figure>

                <div className="flex flex-col gap-4 px-4">
                  <div className="flex gap-4">
                    <span className=" w-fit text-center flex items-center font-semibold transition-colors duration-300 border border-[#ffffff81] shadow-[0_4px_30px_#0000001a] backdrop-blur-md rounded-full py-1 px-4 group-hover:bg-primary group-hover:text-white">
                      {project.category}
                    </span>

                    <a
                      href={project.link}
                      target="_blank"
                      className={`p-2 ml-auto rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_4px_30px_#0000001a] ${
                        theme.palette.type === "light"
                          ? "bg-white/50"
                          : "bg-white/10"
                      }`}
                      rel="noreferrer"
                    >
                      <span>
                        <svg
                          fill={
                            theme.palette.type === "light"
                              ? "#000000"
                              : "#ffffff"
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          width="25px"
                          height="25px"
                        >
                          <path d="M 31.5 9 C 31.224 9 31 9.224 31 9.5 C 31 9.776 31.224 10 31.5 10 L 39.292969 10 L 25.146484 24.146484 C 24.951484 24.341484 24.951484 24.658516 25.146484 24.853516 C 25.244484 24.950516 25.372 25 25.5 25 C 25.628 25 25.755516 24.950516 25.853516 24.853516 L 40 10.707031 L 40 18.5 C 40 18.776 40.224 19 40.5 19 C 40.776 19 41 18.776 41 18.5 L 41 9.5 C 41 9.224 40.776 9 40.5 9 L 31.5 9 z M 14.5 10 C 12.019 10 10 12.019 10 14.5 L 10 35.5 C 10 37.981 12.019 40 14.5 40 L 35.5 40 C 37.981 40 40 37.981 40 35.5 L 40 23.5 C 40 23.224 39.776 23 39.5 23 C 39.224 23 39 23.224 39 23.5 L 39 35.5 C 39 37.43 37.43 39 35.5 39 L 14.5 39 C 12.57 39 11 37.43 11 35.5 L 11 14.5 C 11 12.57 12.57 11 14.5 11 L 26.5 11 C 26.776 11 27 10.776 27 10.5 C 27 10.224 26.776 10 26.5 10 L 14.5 10 z" />
                        </svg>
                      </span>
                    </a>
                  </div>

                  <h3 className="text-3xl font-semibold line-clamp-1">
                    <TextDecrypt text={project.title + " - " + project.alter} />
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    {project.stacks.map((stack, index) => (
                      <li key={index}>
                        <TextDecrypt text={stack} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </>
      </Container>
    </section>
  );
};
