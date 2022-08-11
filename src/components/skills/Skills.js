import React from 'react'
import { useState } from "react";
import { Container } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextDecrypt } from "../content/TextDecrypt";

// Import ../../assets/skills/
import Html from '../../assets/skills/html.svg';
import Css from '../../assets/skills/css.svg';
import Javascript from '../../assets/skills/javascript.svg';
import NodeJS from '../../assets/skills/nodejs.svg';
import ReactJS from '../../assets/skills/react.svg';
import ExpressJS from '../../assets/skills/expressjs.svg';
import TailwindCSS from '../../assets/skills/tailwindcss.svg';
import Bootstrap from '../../assets/skills/bootstrap.png';
import NextJS from '../../assets/skills/next.svg';
import MongoDB from '../../assets/skills/mongodb.svg';
// import Laravel from '../../assets/skills/laravel.svg';
// import MySQL from '../../assets/skills/mysql.svg';

export const Skills = () => {
    const [skills, setSkills] = useState([
        { 
          id: 1,
          title: 'HTML',
          image: `${Html}`,
          link: 'https://www.w3schools.com/html/default.asp',
        },
        { 
          id: 2,
          title: 'CSS',
          image: `${Css}`,
          link: 'https://www.w3schools.com/css/default.asp',
        },
        { 
          id: 3,
          title: 'Javascript',
          image: `${Javascript}`,
          link: 'https://www.w3schools.com/js/default.asp',
        },
        { 
          id: 4,
          title: 'TailwindCSS',
          image: `${TailwindCSS}`,
          link: 'https://www.tailwindcss.com',
        },
        { 
          id: 5,
          title: 'Bootstrap',
          image: `${Bootstrap}`,
          link: 'https://getbootstrap.com/',
        },
        { 
          id: 6,
          title: 'NodeJS',
          image: `${NodeJS}`,
          link: 'https://nodejs.org/',
        },
        { 
          id: 7,
          title: 'ReactJS',
          image: `${ReactJS}`,
          link: 'https://reactjs.org/',
        },
        { 
          id: 8,
          title: 'ExpressJS',
          image: `${ExpressJS}`,
          link: 'https://expressjs.com/',
        },
        { 
          id: 9,
          title: 'NextJS',
          image: `${NextJS}`,
          link: 'https://nextjs.org/',
        },
        { 
          id: 10,
          title: 'MongoDB',
          image: `${MongoDB}`,
          link: 'https://www.mongodb.com/',
        },
        // { 
        //   id: 11,
        //   title: 'Laravel',
        //   image: `${Laravel}`,
        // },
        // { 
        //   id: 12,
        //   title: 'MySQL',
        //   image: `${MySQL}`,
        // },
      ]);
  return (
    <section id="skills">
        <Container component="main" className='' maxWidth="md">
            <div className='skills pt-12 md:pt-44 pb-32'>
                <div className='grid justify-center grid-cols-3 md:grid-cols-5 gap-6 px-24 md:px-36'>
                    {skills.map((skill) => (
                        <div className='flex justify-center flex-col text-center'>
                            <a href={ skill.link } className="flex justify-center">
                              <img className='w-[60px] transition duration-300 hover:scale-110 ' src={ skill.image } alt={ skill.title }/>
                            </a>
                            <p>{ skill.title }</p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </section>
  )
}