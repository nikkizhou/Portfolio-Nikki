/* eslint-disable no-unused-vars */
import React from "react";
import './Works.css';
import { info } from "../../info/info";

export const Works = () => {
  return (
    <section id="works" className="works">
      <h1>Projects</h1>
      {info.portfolio.map((project,index) => (
        <div className="project" key={ index }>
          <img src={project.image} alt={project.image} />
          <h3>Description</h3>
          <div className="iconlinks">
            <a href={project.live} >
              <i className='fa fa-safari' /> Live Deomo
            </a>
            <a href={project.source}>
              <i className='fa fa-code' /> Github Code
            </a>
          </div>

        </div>
      ))}
    </section>
  );
};
