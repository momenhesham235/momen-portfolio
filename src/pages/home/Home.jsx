import Hero from "../../components/hero/Hero.jsx";
import Summary from "../../components/summary/Summary.jsx";
import Projects from "../../components/projects/Projects.jsx";
import Skills from "../../components/skills/Skills.jsx";
import Contact from "../../components/contact/Contact.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="divider" />
      <Summary />
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
