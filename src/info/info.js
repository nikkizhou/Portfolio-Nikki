

import self from "../assets/self.png"
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Nikki",
  lastName: "Zhou",
  initials: "js",
  position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '☕',
      text: 'Fueled by coffee'
    },
    {
      emoji: '🌎',
      text: 'Based in Oslo'
    },
    {
      emoji: "🚀",
      text: "Love exploring"
    }
  ],
  socials: [
    {
      link: "",
      icon: 'fa fa-facebook',
      label: 'facebook'
    },
    {
      link: "",
      icon: 'fa fa-instagram',
      label: 'instagram'
    },
    {
      link: "https://github.com/nikkizhou",
      icon: "fa fa-github",
      label: 'github'
    },
    {
      link: "https://www.linkedin.com/in/nikki-zhou-b456ba152/",
      icon: "fa fa-linkedin",
      label: 'linkedin'
    },

  ],
  bio: "Hello! I'm Nikki",
  skills:
  {
    Language: [
      {
        label: 'Javascript',
        icon: 'https://img.icons8.com/color/javascript.png'
      },
      {
        label: 'Typescript',
        icon: 'https://img.icons8.com/color/typescript.png'
      },
      {
        label: 'Java',
        icon: 'https://img.icons8.com/color/java.png'
      },
      {
        label: 'Python',
        icon: 'https://img.icons8.com/color/python.png'
      }],
    Frontend: [
      {
        label: 'React',
        icon: 'https://img.icons8.com/plasticine/react.png'
      },
      {
        label: 'Redux',
        icon: 'https://img.icons8.com/color/redux.png'
      },
      {
        label: 'Html5',
        icon: 'https://img.icons8.com/color/html-5.png'
      },
      {
        label: 'Css3',
        icon: 'https://img.icons8.com/color/css3.png'
      }],
    Backend: [
      {
        label: 'Node.js',
        icon: 'https://img.icons8.com/fluent/node-js.png'
      },
      {
        label: 'MongoDB',
        icon: 'https://img.icons8.com/color/mongodb.png'
      },
    ],
    Other: [
      {
        label: 'Git',
        icon: 'https://img.icons8.com/color/git.png'
      },
      {
        label: 'Github',
        icon: 'https://img.icons8.com/material-sharp/github.png'
      }],
  }
  ,
  hobbies: [
    {
      label: 'basketball',
      emoji: ''
    },
    {
      label: 'skateboard',
      emoji: ''
    },
    {
      label: 'coding',
      emoji: ''
    },
    {
      label: 'cooking',
      emoji: ''
    }

  ],
  portfolio: [
    {
      title: "Join The Queue",
      live: "https://jointheqq.herokuapp.com/",
      source: "https://github.com/nikkizhou/Q",
      image: project1
    },
    {
      title: "Living Cost Comparing App",
      live: "",
      source: "https://github.com/nikkizhou/Living-Cost-App",
      image: project2
    },
    {
      title: "Portfolio",
      live: "",
      source: "https://github.com/nikkizhou/portfolio",
      image: project3
    },
    {
      title: "Typescript - Puppies",
      live: "",
      source: "https://github.com/nikkizhou/FullStack-Puppies",
      image: project4
    },
  ]
}
