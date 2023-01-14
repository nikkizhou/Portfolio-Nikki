

import self from "../assets/self.png"
import que from "../assets/que.png"
import livingCost from "../assets/livingCost.png"
import portfolio from "../assets/portfolio.png"
import puppy from "../assets/puppy.png"
import ecommerce from "../assets/ecommerce.png"
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Nikki",
  lastName: "Zhou",
  initials: "js",
  aboutme: `I'm Nikki Zhou, a fullstack developer. I'm a self-motivated and efficient person with a great
              passion for problem-solving and learning new things.`,
  position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🌎',
      text: 'Based in Oslo'
    },
    {
      emoji: '💪',
      text: 'Self-motivated'
    },
    {
      emoji: "🚀",
      text: "Love exploring"
    }
  ],
  socials: [
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
    {
      link: "https://www.facebook.com/nikki.zhou.90",
      icon: 'fa fa-facebook',
      label: 'facebook'
    },
    {
      link: "",
      icon: 'fa fa-instagram',
      label: 'instagram'
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
        label: 'ReactNative',
        icon: 'https://miro.medium.com/max/1155/1*GkR93AAlILkmE_3QQf88Ug.png'
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
        label: 'Express',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/express-2-282577.png'
      },
      {
        label: 'MongoDB',
        icon: 'https://img.icons8.com/color/mongodb.png'
      },
      {
        label: 'PostgreSQL',
        icon: 'https://img.icons8.com/color/postgresql'
      },
    ],
    Other: [
      {
        label: 'NextJs',
        icon: 'https://img.icons8.com/color/nextjs.png'
      },
      {
        label: 'AWS',
        icon: 'https://cdn.iconscout.com/icon/free/png-512/aws-1869025-1583149.png'
      },
      {
        label: 'Docker',
        icon: 'https://img.icons8.com/color/docker.png'
      },
      {
        label: 'Firebase',
        icon: 'https://img.icons8.com/color/firebase.png'
      },
      {
        label: 'Auth0',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Logo_de_Auth0.svg'
      },
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
      title: "Nikki's EShop",
      live: "https://products-blue-beta.vercel.app/",
      source: "https://github.com/nikkizhou/Nikkis-EShop",
      description: 'A classical ecommerce app with features such as authentication, product search and filter, cart, orders, reviews, editing profile, and contact customer service.',
      image: ecommerce,
    },
    {
      title: "Join The Queue",
      live: "https://join-the-queue-client.onrender.com/",
      source: "https://github.com/nikkizhou/Join-The-Queue",
      description: 'A queue management app which is easier for users to queue up and easier for business to keep track of and manage their queue.',
      image: que
    },
    {
      title: "Living Cost Comparing App",
      live: "https://living-cost-app-client.vercel.app/",
      source: "https://github.com/nikkizhou/Living-Cost-App",
      description: 'A fullstack app where user can compare living costs of two different cities. A search history bar is showed to make it easier for user to view the data of the searched cities again.',
      image: livingCost
    },
    {
      title: "Typescript - Puppies",
      live: "https://puppies-library.vercel.app/",
      source: "https://github.com/nikkizhou/Puppy-Library",
      description: 'A fullstack app with CRUD operations where user can add, edit, delete and check details of the puppies in the library.',
      image: puppy
    },
    {
      title: "Portfolio",
      live: "",
      source: "https://github.com/nikkizhou/portfolio",
      description: 'A frontend app to introduce Nikki as a fullstack developer. Providing features such as cv downloading, social media connecting, contact form and so on.',
      image: portfolio
    },
  ]
}
