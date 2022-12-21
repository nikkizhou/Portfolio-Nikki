/* eslint-disable no-unused-vars */
import React from "react";
import { info } from "../../info/info";


import './About.css';


export const About = () => {
  
  return (
    <section id="about" className="about">
      <div className="about_bio">
        <img className="img" src={info.selfPortrait} />
        <div className="content_wrapper">
          <h2 className="heading">About Me</h2>
          <ul className="miniBio_wrapper">
          {info.miniBio.map((bio, index) => (
            <li className="miniBio" key={index}>{bio.emoji}{bio.text}</li>
          ))}
          </ul>
        </div>
      </div>
      <div className="about_desc">{info.aboutme}</div>
    </section>
  );
};
