import { Suspense, lazy } from "react";
import { SEO } from "@components/common";
import { useScrollToTop } from "@hooks/use-scroll-to-top";

const Hero = lazy(() => import("@components/home/hero/Hero.jsx"));
const Bio = lazy(() => import("@components/home/bio/Bio.jsx"));
const Experience = lazy(() => import("@components/home/experience/Experience.jsx"));
const Projects = lazy(() => import("@components/home/projects/Projects.jsx"));
const Skills = lazy(() => import("@components/home/skills/Skills.jsx"));
const Contact = lazy(() => import("@components/home/contact/Contact.jsx"));

import HeroSkeleton from "@components/skeleton/HeroSkeleton.jsx";
import SkillsSkeleton from "@components/skeleton/SkillsSkeleton.jsx";
import ProjectsSkeleton from "@components/skeleton/ProjectsSkeleton.jsx";

import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/config/constants";

/**
 * Home Page Component
 * Main landing page with all portfolio sections
 */
const Home = () => {
  useScrollToTop();

  return (
    <>
      <SEO 
        title={SITE_NAME}
        description={SITE_DESCRIPTION}
        canonical={SITE_URL}
      />
      
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      
      <div className="divider" />
      
      <Suspense fallback={null}>
        <Bio />
      </Suspense>
      
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
