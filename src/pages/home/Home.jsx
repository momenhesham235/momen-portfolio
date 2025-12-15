import Hero from "../../components/home/hero/Hero.jsx";
import Bio from "../../components/home/bio/Bio.jsx";
// import Experience from "../../components/experience/Experience.jsx";
import Projects from "../../components/home/projects/Projects.jsx";
import Skills from "../../components/home/skills/Skills.jsx";
import Contact from "../../components/home/contact/Contact.jsx";

import { IoIosArrowUp } from "react-icons/io";

import "./home.css";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Hero />
      <div className="divider" />
      <Bio />
      <div className="divider" />
      {/* <Experience /> */}
      {/* <div className="divider" /> */}
      <Projects />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Contact />

      <button className="scroll-top" onClick={scrollToTop}>
        <IoIosArrowUp />
      </button>
    </>
  );
};

export default Home;
