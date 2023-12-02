/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="-left-32 sm:-left-[8.7rem] lg:-left-[7.5rem]">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={`${activeNav === "#" ? "active" : ""} hover:text-primary`}
      >
        <Typography>Home</Typography>
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={`${
          activeNav === "#skills" ? "active" : ""
        } hover:text-primary`}
      >
        <Typography>Experience</Typography>
      </a>
      <a
        href="#works"
        onClick={() => setActiveNav("#works")}
        className={`${
          activeNav === "#works" ? "active" : ""
        } hover:text-primary`}
      >
        <Typography>Projects</Typography>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`${
          activeNav === "#about" ? "active" : ""
        } hover:text-primary`}
      >
        <Typography>About</Typography>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`${
          activeNav === "#contact" ? "active" : ""
        } hover:text-primary`}
      >
        <Typography>Contact</Typography>
      </a>
    </nav>
  );
};
