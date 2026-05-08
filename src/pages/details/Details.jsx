import { SEO } from "@components/common";
import { useScrollToTop } from "@hooks/use-scroll-to-top";
import DetailsProject from "../../components/details/detailsProject/DetailsProject";

/**
 * Project Details Page
 * Displays detailed information about a specific project
 */
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
