import React from 'react';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/socialIcons/SocialIcons';
import { SideNavbar } from '../components/nav/SideNavbar';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import { Skills } from '../components/skills/Skills';


const style = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
export const Home = () => {
  return (
    <>
      <div style={style} id="home">
        <About />
        <SocialIcons />
        <Resume />
      </div>
      <SideNavbar />
      <Works />
      <Skills/>
      <Contact />
    </>
  );
};
