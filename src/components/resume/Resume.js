import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import ResumePDF from './../../assets/CV Nikki Zhou.pdf';
import './Resume.css'
import {
  ResumeIcon
} from './ResumeButton';


export const Resume = () => {

  return (
    <div className='resume'>
    <Link
      href= {`${ResumePDF}`}
      target='_blank'
      rel='noopener noreferrer'
      
    >
      <ResumeIcon />
      <p>Resume</p>
      </Link>
    </div>
  );
};
