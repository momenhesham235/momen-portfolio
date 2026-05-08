/**
 * Application-wide constants
 * Centralized configuration for magic numbers, URLs, and app settings
 */

// Pagination
export const PROJECTS_PER_PAGE = 6;
export const PROJECTS_LOAD_MORE_INCREMENT = 6;

// Animation
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
};

export const ANIMATION_STAGGER_DELAY = 0.08;

// Intersection Observer
export const LAZY_IMAGE_THRESHOLD = 0.15;

// Form
export const FORMSPREE_FORM_ID = "mdkqrlvy";
export const MESSAGE_MIN_LENGTH = 3;
export const MESSAGE_MAX_LENGTH = 280;

// Toast
export const TOAST_DURATION = 5000;
export const TOAST_POSITION = "top-right";

// Theme
export const THEME_STORAGE_KEY = "theme";
export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";

// Meta
export const SITE_NAME = "Momen Hesham - Software Engineer | MERN Stack";
export const SITE_DESCRIPTION =
  "Portfolio of Momen Hesham, showcasing projects built with React, Next.js, and MERN stack.";
export const SITE_URL = "https://momenhesham235.github.io/momen-portfolio/";
export const SITE_IMAGE = `${SITE_URL}me.png`;

// Social Links
export const SOCIAL_LINKS = {
  github: "https://github.com/momenhesham235",
  linkedin: "https://www.linkedin.com/in/momen-hesham/",
  email: "hmomen235@gmail.com",
  whatsapp: "201062749282",
};

// Routes
export const ROUTES = {
  home: "/",
  projectDetails: (id) => `/details/${id}`,
};
