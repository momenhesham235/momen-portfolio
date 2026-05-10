import { useEffect } from "react";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_IMAGE } from "@app/config/constants";

/**
 * SEO Component
 * Manages document title and meta description dynamically
 * 
 * @param {Object} props
 * @param {string} props.title - Page title (will be appended to site name)
 * @param {string} props.description - Page description
 * @param {string} props.canonical - Canonical URL
 */
const SEO = ({ 
  title = SITE_NAME, 
  description = SITE_DESCRIPTION,
  canonical = SITE_URL,
  image = SITE_IMAGE,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) {
      ogUrl.setAttribute("content", canonical);
    }

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute("content", image);
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector("meta[name='twitter:title']");
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    const twitterDescription = document.querySelector("meta[name='twitter:description']");
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    const twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) {
      twitterImage.setAttribute("content", image);
    }

    // Add or update canonical link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
  }, [title, description, canonical, image]);

  return null;
};

export default SEO;
