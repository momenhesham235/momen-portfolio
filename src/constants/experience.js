/**
 * Experience entries — non-translatable data only.
 * Translatable fields (title, company, dates, description bullets) live in
 * `locales/{lng}/portfolio.json` under `experience.items`, matched by index.
 */
export const experienceData = [
  {
    id: 1,
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    tech: ["React", "Tailwind CSS", "Material UI"],
  },
  {
    id: 3,
    tech: ["React", "React Native", "TypeScript", "API Integration", "Sentry"],
    current: true,
  },
];
