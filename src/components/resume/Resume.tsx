import React from 'react';
import ResumePDF from './../../assets/Nikki Zhou CV.pdf';
import './Resume.css'
import { ResumeIcon} from './ResumeButton';


export const Resume = () => {

  return (
    <a className='resume'
      href= {`${ResumePDF}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <ResumeIcon />
      <h3>CV</h3>
    </a>
 
  );
};
