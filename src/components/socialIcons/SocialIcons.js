import React from 'react';
import { info } from '../../info/info'
import  './SocialIcons.css'

const SocialIcon = (props) => {
  const { link, icon, label } = props;
  return (
    <a target="_blank" href={link} className='icon'>
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
