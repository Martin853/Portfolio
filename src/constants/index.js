import {
  backend,
  web,
  github,
  menu,
  close,
  logo,
  css,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  expressjs,
  firebase,
  sass,
  vite,
  webpack,
  blog,
  flixnet,
  hoobank,
  fiverr,
  upwork,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Freelancer Web Developer",
    company_name: "Fiverr, Upwork",
    icon: [fiverr, upwork],
    iconBg: "#383E56",
    date: "May 2023 - Current",
    points: [
      "Delivering high-quality web applications using React.js and related technologies.",
      "Collaborating closely with clients, implementing responsive design, and ensuring application stability through thorough testing.",
      "Keeping up-to-date with the latest web development trends to deliver cutting-edge solutions.",
    ],
  },
];

const projects = [
  {
    name: "HooBank",
    description:
      "Hoobank is a captivating bank landing page project that brings a fresh perspective to banking experiences. With a user-friendly and interactive design powered by React.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/Martin853/Hoo-Bank",
  },
  {
    name: "FlixNet",
    description:
      "FlixNet is your ultimate movie site, curated with passion and powered by the TMDB API. Explore an extensive collection of films, TV shows, and documentaries, all at your fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tmdb-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: flixnet,
    source_code_link: "https://github.com/Martin853/FlixNet",
  },
  {
    name: "Blogify",
    description:
      "Blogify is a dynamic full-stack MENR (MongoDB, Express.js, Node.js, React.js) app that redefines the way we share ideas and connect with like-minded individuals.",
    tags: [
      {
        name: "mern-stack",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Martin853/Blog-API",
  },
];

export { services, technologies, experiences, projects };
