import { leno, productSystemJS, airbnb, twitter } from "../../assets";

export const optionsSelect = [
  { label: "All", value: "all" },
  { label: "HTML & CSS", value: "html" },
  { label: "JavaScript", value: "js" },
  { label: "React", value: "react" },
  { label: "Next", value: "next" },
  { label: "Full Stack", value: "fullstack" },
];

export const projectsData = [
  {
    id: 1,
    title: "Leno Project",
    description: "A responsive landing page built with HTML and CSS.",
    image: leno,
    githubLink: "https://github.com/momenhesham235/template_one",
    liveLink: "https://momenhesham235.github.io/template_one/",
    category: "html",
  },
  {
    id: 2,

    title: "Product Management System",
    description: "A simple todo app built with HTML, CSS, and JavaScript.",
    image: productSystemJS,
    githubLink:
      "https://github.com/momenhesham235/Product-Management-System-Javascript",
    liveLink:
      "https://momenhesham235.github.io/Product-Management-System-Javascript/",
    category: "js",
  },
  {
    id: 3,
    title: "Airbnb Project",
    description: "A weather app built with React and OpenWeatherMap API.",
    image: airbnb,
    githubLink: "https://github.com/momenhesham235/template_one",
    liveLink: "https://aribnb-clone-nine.vercel.app/",
    category: "next",
  },
  {
    id: 4,
    title: "MERN Stack Twitter",
    description: "A full-stack e-commerce platform built with MERN stack.",
    image: twitter,
    githubLink: "https://github.com/momenhesham235/MERN-Stack-Twitter-Clone",
    liveLink: "https://github.com/momenhesham235/MERN-Stack-Twitter-Clone",
    category: "fullstack",
  },
];
