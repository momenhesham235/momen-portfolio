import Hero from "../../components/hero/Hero";
import Summary from "../../components/summary/Summary";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import Contact from "../../components/contact/Contact";

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
