
import React from "react";
import { useState } from "react";
import "./SideNavbar.css";
import {Link} from 'react-scroll'

export const SideNavbar = () => {
  return (
    <nav>
      <Link activeClass="active" smooth spy to="about"><h2>Home</h2></Link>
      <Link activeClass="active" smooth spy to="works"><h2>Projects</h2></Link>
      <Link activeClass="active" smooth spy to="skills"><h2>Skills</h2></Link>
      <Link activeClass="active" smooth spy to="contact"><h2>Contact</h2></Link>
    </nav>
  );
};
