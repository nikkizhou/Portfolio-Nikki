import React from 'react';
import { SocialIcons } from '../components/socialIcons/SocialIcons';
import { SideNavbar } from '../components/nav/SideNavbar';
import { About } from '../components/about/About';
import { Works } from '../components/works/Works';
import { Contact } from '../components/contact/Contact';
import { Skills } from '../components/skills/Skills';
import './Home.css'


export const Home = () => {
  return (
    <div id="home" className='home'>
      <SideNavbar />
      <div className='home_main'>
        <About />
        <Works />
        <Skills />
        <Contact/>
      </div>
      <SocialIcons />
    </div>
  );
};
