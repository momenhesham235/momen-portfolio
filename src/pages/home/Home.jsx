import { Suspense, lazy } from "react";

const Hero = lazy(() => import("../../components/home/hero/Hero.jsx"));
const Bio = lazy(() => import("../../components/home/bio/Bio.jsx"));
const Experience = lazy(() =>
  import("../../components/home/experience/Experience.jsx")
);
const Projects = lazy(() =>
  import("../../components/home/projects/Projects.jsx")
);
const Skills = lazy(() => import("../../components/home/skills/Skills.jsx"));
const Contact = lazy(() => import("../../components/home/contact/Contact.jsx"));

import HeroSkeleton from "../../components/skeleton/HeroSkeleton.jsx";
import SkillsSkeleton from "../../components/skeleton/SkillsSkeleton.jsx";
import ProjectsSkeleton from "../../components/skeleton/ProjectsSkeleton.jsx";

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
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <div className="divider" />
      <Bio />
      <div className="divider" />
      {/* <Experience /> */}
      {/* <div className="divider" /> */}
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <div className="divider" />
      <Suspense fallback={<SkillsSkeleton />}>
        <Skills />
      </Suspense>
      <div className="divider" />
      <Contact />

      <button className="scroll-top" onClick={scrollToTop}>
        <IoIosArrowUp />
      </button>
    </>
  );
};

export default Home;
