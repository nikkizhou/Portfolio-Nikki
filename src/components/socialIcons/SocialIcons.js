import React from 'react';
import { info } from '../../info/info'
import  './SocialIcons.css'
/* eslint-disable react/prop-types */
const SocialIcon = ({ link, icon, label }) => {
  
  return (
    <a target="_blank" rel="noreferrer" href={link} className='icon'>
      <i className={icon}  />
    </a>
  );
}


export const SocialIcons = () => {
  return (
    <div className='iconWrapper'>
      {info.socials.map((social, index) => (
        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
      ))}
    </div>
  )
};
