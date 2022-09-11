/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import { info } from "../../info/info";


import './About.css';

const style= {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  }


export const About = () => {
  const aboutme = `I'm ${info.firstName} ${info.lastName}, a fullstack javascript developer in SALT. I'm a self-motivated and efficient person with a great
              passion for problem-solving and learning new things.`;

  return (
    <section id="about">
      <Container component="main" style={ style} maxWidth="md">
        <div className="about">
          <div className="about_bio">
            <img className="_img" src={info.selfPortrait} />
            <div className="_content_wrapper">
              <h1 className="heading">About me</h1>
              <ul>
              {info.miniBio.map((bio, index) => (
                <li className="miniBio" key={index}>{bio.emoji}{bio.text}</li>
              ))}
              </ul>
            </div>
          </div>
          <div className="about_desc">{aboutme}</div>
        </div>
      </Container>
    </section>
  );
};
