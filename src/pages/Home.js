import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/socialIcons/SocialIcons';
import { SideNavbar } from '../components/nav/SideNavbar';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import { Skills } from '../components/skills/Skills';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="home">
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
