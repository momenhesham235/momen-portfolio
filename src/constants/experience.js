/**
 * Experience entries — non-translatable data only.
 * Translatable fields (title, company, dates, description bullets) live in
 * `locales/{lng}/portfolio.json` under `experience.items`, matched by index —
 * so this array and both locale arrays must stay the same length and order.
 *
 * Order is oldest → newest: the deck stacks upward, and the last entry is the
 * one that never gets covered, so the current role stays on top at the end.
 */
export const experienceData = [
  {
    // Military service carries no stack; `tech` is omitted rather than left
    // empty so the card skips the chip row entirely.
    id: 1,
  },
  {
    id: 2,
    tech: ["React", "React Native", "TypeScript", "REST APIs", "Sentry"],
  },
  {
    id: 3,
    current: true,
    tech: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Axios",
      "i18next / RTL",
      "Tailwind CSS",
    ],
  },
];
