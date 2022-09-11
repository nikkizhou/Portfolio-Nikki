/* eslint-disable no-unused-vars */
import React from "react";
import './Works.css';

import { info } from "../../info/info";

// const style= {
//     maxWidth: '100vw',
//     marginTop: '3em',
//     marginBottom: "auto",
// }



export const Works = () => {

  return (
    <section id="works">
      <div  className="main">
        <h1>Projects</h1>
        {info.portfolio.map((project,index) => (
          <div className="project" key={ index }>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.image }/>
            </div>
            <div className="__iconlinks">
              <a href={project.live} >
                <i className='fa fa-safari' /> Live Deomo
              </a>
              <a href={project.live}>
                <i className='fa fa-code' /> Github Code
              </a>
            </div>

          </div>
        ))}
  
      </div>
    </section>
  );
};
