import {
  leno,
  productSystemJS,
  airbnb,
  twitter,
  eCommerce,
} from "../../assets";

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
    title: "Leno Website",
    description:
      "A fully responsive landing page built with semantic HTML and modern CSS techniques.",
    year: 2023,
    role: "Frontend Developer",
    status: "Completed",
    duration: "3 days",
    image: leno,
    githubLink: "https://github.com/momenhesham235/template_one",
    liveLink: "https://momenhesham235.github.io/template_one/",
    category: "html",
    features: [
      "Semantic HTML structure",
      "Fully responsive layout",
      "Modern Flexbox & Grid system",
      "CSS Variables & Custom Properties",
      "Cross-browser compatibility",
      "Clean and maintainable code",
    ],

    tech: ["HTML", "CSS", "Responsive Design"],

    performance: ["Fast load time", "Optimized images", "Minimal CSS"],
  },
  {
    id: 2,

    title: "Product Management System",
    description: `A complete product management system built with Vanilla JavaScript, 
      allowing users to add, update, delete, and search products with persistent data storage.`,
    year: 2023,
    role: "Frontend Developer",
    status: "Completed",
    duration: "2 days",
    image: productSystemJS,
    githubLink:
      "https://github.com/momenhesham235/Product-Management-System-Javascript",
    liveLink:
      "https://momenhesham235.github.io/Product-Management-System-Javascript/",
    category: "js",
    features: [
      "Create, Read, Update, and Delete (CRUD) operations",
      "Local Storage data persistence",
      "Dynamic DOM manipulation",
      "Real-time search functionality",
      "Form validation",
      "Clean and modular JavaScript code",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    performance: ["Instant UI updates", "Optimized DOM rendering"],
  },

  {
    id: 3,
    title: "Airbnb Project",
    description: `A modern Airbnb clone built with Next.js featuring dynamic routing, 
    responsive UI, and optimized performance using server-side rendering.`,
    year: 2024,
    role: "Frontend Developer",
    status: "Completed",
    duration: "6 days",
    image: airbnb,
    githubLink: "https://github.com/momenhesham235/aribnb-Clone",
    liveLink: "https://aribnb-clone-nine.vercel.app/",
    category: "next",
    features: [
      "Server-Side Rendering (SSR) for better SEO",
      "Dynamic routing with Next.js App Router",
      "Responsive UI built with Tailwind CSS",
      "Reusable and scalable components",
      "Optimized images using Next.js Image",
      "Clean project structure",
    ],
    tech: ["Next.js", "Tailwind CSS", "OpenWeatherMap API"],
    performance: [
      "Fast page loading",
      "SEO-friendly rendering",
      "Optimized assets",
    ],
  },
  {
    id: 4,
    title: "MERN Stack Twitter",
    description: `A full-stack Twitter clone built with the MERN stack, 
    featuring authentication, real-time interactions, and scalable REST APIs.`,
    year: 2025,
    role: "Full Stack Developer",
    status: "Completed",
    duration: "15 days",
    image: twitter,
    githubLink: "https://github.com/momenhesham235/MERN-Stack-Twitter-Clone",
    liveLink: "https://github.com/momenhesham235/MERN-Stack-Twitter-Clone",
    category: "fullstack",
    features: [
      "JWT-based authentication & authorization",
      "User registration, login, and protected routes",
      "Create, edit, delete tweets (CRUD)",
      "Like & comment functionality",
      "Follow / unfollow users",
      "RESTful API with Express & MongoDB",
      "Pagination & optimized queries",
      "Global state management with TanStack Query",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    performance: [
      "Optimized database queries",
      "Efficient API caching with React Query",
    ],
  },
  {
    id: 5,
    title: "E-Commerce With JavaScript",
    description: `A fully responsive e-commerce website built with React Components,
  featuring a dynamic cart and checkout process.`,
    year: 2025,
    role: "Frontend Developer",
    status: "in progress",
    duration: "Starting from 2 days",
    image: eCommerce,
    githubLink:
      "https://github.com/momenhesham235/React-E-Commerce-With-Javascript",
    liveLink:
      "https://momenhesham235.github.io/React-E-Commerce-With-Javascript/",
    category: "react",
    features: [
      "Dynamic cart and checkout process",
      "Responsive design",
      "Clean and maintainable code",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React"], // ضفت React بما إنه React Project
    performance: [
      "Fast page loading",
      "Optimized images",
      "Cross-browser compatibility",
    ],
  },
];
