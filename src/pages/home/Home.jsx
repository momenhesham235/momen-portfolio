import { Suspense, lazy, useEffect } from "react";

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

const Home = () => {
  useEffect(() => {
    document.title = "Momen Hesham - Software Engineer | MERN Stack";
  }, []);

  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <div className="divider" />
      <Bio />
      <div className="divider" />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Suspense fallback={<SkillsSkeleton />}>
        <Skills />
      </Suspense>
      <div className="divider" />
      <Contact />
    </>
  );
};

export default Home;
