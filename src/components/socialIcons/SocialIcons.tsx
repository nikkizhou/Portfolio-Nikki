import React from 'react';
import { info } from '../../info/info'
import './SocialIcons.css'

interface Props{
  link: string,
  icon: string,
  label:string
}

const SocialIcon = ({ link, icon, label }:Props) => 
    <a target="_blank" rel="noreferrer" href={link} className='icon'>
      <i className={icon}  />
    </a>


export const SocialIcons = () => {
  console.log(info.socials);
  return (
    <div className='iconWrapper'>
      {info.socials.map((social, index) => (
        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
      ))}
    </div>
  )
};
