import Hero from "../../components/hero/Hero.jsx";
import Bio from "../../components/bio/Bio.jsx";
import Projects from "../../components/projects/Projects.jsx";
import Skills from "../../components/skills/Skills.jsx";
import Contact from "../../components/contact/Contact.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="divider" />
      <Bio />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Contact />
      <div className="divider" />
    </>
  );
};

export default Home;
