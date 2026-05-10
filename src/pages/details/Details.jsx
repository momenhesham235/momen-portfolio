import { SEO } from "@components/common";
import { useScrollToTop } from "@hooks/use-scroll-to-top";
import DetailsProject from "@components/momenPortfolio/ProjectDetails/DetailsProject";

const Details = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Project Details | Momen Hesham Portfolio"
        description="Detailed information about the project"
      />
      <DetailsProject />
    </>
  );
};

export default Details;
