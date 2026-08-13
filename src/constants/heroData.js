import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { react, typescript, next, nodejs } from "@assets";

/**
 * Headline stack shown as chips under the hero bio — the shortlist a recruiter
 * scans first, not the full skills matrix (that lives in the Skills section).
 */
export const heroStack = [
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "Node.js",
  "MongoDB",
];

/**
 * Small badges that orbit the hero portrait. Kept to four so they frame the
 * avatar instead of crowding it.
 */
export const heroOrbitBadges = [
  { id: "react", label: "React",      img: react,      position: "top-start" },
  { id: "ts",    label: "TypeScript", img: typescript, position: "top-end"   },
  { id: "next",  label: "Next.js",    img: next,       position: "bottom-start" },
  { id: "node",  label: "Node.js",    img: nodejs,     position: "bottom-end"   },
];

/**
 * Social profile links — single source of truth, consumed by Hero & Footer.
 * `Icon` is the actual React component, so consumers never need a string lookup.
 */
export const socialLinks = [
  {
    id: 1,
    Icon: FaFacebook,
    key: "facebook",
    link: "https://www.facebook.com/momen.hesham.5264/",
  },
  {
    id: 2,
    Icon: FaXTwitter,
    key: "x",
    link: "https://x.com/m0menHeshamel",
  },
  {
    id: 3,
    Icon: FaGithub,
    key: "github",
    link: "https://github.com/momenhesham235",
  },
  {
    id: 4,
    Icon: FaLinkedin,
    key: "linkedin",
    link: "https://www.linkedin.com/in/momen-hesham/",
  },
  {
    id: 5,
    Icon: TbBrandLeetcode,
    key: "leetcode",
    link: "https://leetcode.com/u/hmomen235/",
  },
];
