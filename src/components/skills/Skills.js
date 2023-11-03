import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { iconsSkills } from "./icon-skills";

const {
  Html,
  Css,
  Javascript,
  Typescript,
  NodeJS,
  VueJs,
  Vite,
  ReactJS,
  ExpressJS,
  TailwindCSS,
  NextJS,
  MongoDB,
  Git,
  Expo,
  Swift,
  SwiftUI,
  Supabase,
} = iconsSkills;

export const Skills = () => {
  const [skills] = useState([
    {
      title: "HTML",
      image: `${Html}`,
      link: "https://www.w3schools.com/html/default.asp",
    },
    {
      title: "CSS",
      image: `${Css}`,
      link: "https://www.w3schools.com/css/default.asp",
    },
    {
      title: "JavaScript",
      image: `${Javascript}`,
      link: "https://www.javascript.com",
    },
    {
      title: "TypeScript",
      image: `${Typescript}`,
      link: "https://www.typescriptlang.org",
    },
    {
      title: "Tailwind CSS",
      image: `${TailwindCSS}`,
      link: "https://www.tailwindcss.com",
    },
    {
      title: "Node JS",
      image: `${NodeJS}`,
      link: "https://nodejs.org/",
    },
    {
      title: "React JS",
      image: `${ReactJS}`,
      link: "https://reactjs.org/",
    },
    {
      title: "Next JS",
      image: `${NextJS}`,
      link: "https://nextjs.org/",
    },
    {
      title: "Vue Js",
      image: `${VueJs}`,
      link: "https://vuejs.org/",
    },
    {
      title: "Vite",
      image: `${Vite}`,
      link: "https://vitejs.dev/",
    },
    {
      title: "React Native",
      image: `${ReactJS}`,
      link: "https://reactnative.dev/",
    },
    {
      title: "Expo",
      image: `${Expo}`,
      link: "https://expo.dev",
    },
    {
      title: "Swift",
      image: `${Swift}`,
      link: "https://www.swift.org",
    },
    {
      title: "Swift UI",
      image: `${SwiftUI}`,
      link: "https://developer.apple.com/xcode/swiftui/",
    },
    {
      title: "Express JS",
      image: `${ExpressJS}`,
      link: "https://expressjs.com/",
    },
    {
      title: "MongoDB",
      image: `${MongoDB}`,
      link: "https://www.mongodb.com/",
    },
    {
      title: "Supabase",
      image: `${Supabase}`,
      link: "https://supabase.com/",
    },
    {
      title: "Git",
      image: `${Git}`,
      link: "https://git-scm.com/",
    },
  ]);

  return (
    <section id="skills">
      <Container component="main" className="" maxWidth="md">
        <div className="flex items-center min-h-screen py-32 md:py-0 skills">
          <div className="grid justify-center grid-cols-2 gap-6 px-24 md:grid-cols-6 md:px-36">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center text-center"
              >
                <a
                  href={skill.link}
                  target="_blank"
                  className="flex justify-center"
                  rel="noreferrer"
                >
                  <img
                    className="w-[60px] transition duration-300 hover:scale-110 "
                    src={skill.image}
                    alt={skill.title}
                  />
                </a>
                <p className="whitespace-nowrap">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
