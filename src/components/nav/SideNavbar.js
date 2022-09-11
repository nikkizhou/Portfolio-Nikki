/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <h2>Home</h2>
      </a>
      <a href="#works"
        onClick={() => setActiveNav('#works')}
        className={activeNav === '#works' ? 'active' : ''}
      >
        <h2>Projects</h2>
      </a>
      <a href="#skills" 
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <h2>Skills</h2>
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <h2>Contact</h2>
      </a>
    </nav>
  );
};
