import { Suspense, lazy } from "react";
import { SEO } from "@components/common";
import { useScrollToTop } from "@hooks/use-scroll-to-top";
import { HeroSkeleton, ProjectsSkeleton, SkillsSkeleton } from "@components/feedback";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@app/config/constants";

const Hero       = lazy(() => import("@components/momenPortfolio/Hero/Hero.jsx"));
const Bio        = lazy(() => import("@components/momenPortfolio/Bio/Bio.jsx"));
const Experience = lazy(() => import("@components/momenPortfolio/Experience/Experience.jsx"));
const Projects   = lazy(() => import("@components/momenPortfolio/Projects/Projects.jsx"));
const Skills     = lazy(() => import("@components/momenPortfolio/Skills/Skills.jsx"));
const Contact    = lazy(() => import("@components/momenPortfolio/Contact/Contact.jsx"));

const Home = () => {
  useScrollToTop();

  return (
    <>
      <SEO title={SITE_NAME} description={SITE_DESCRIPTION} canonical={SITE_URL} />

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
