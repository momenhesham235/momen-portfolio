import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

/**
 * Icon mapping for social links
 * Centralizes icon component mapping to avoid duplication
 */
export const iconMap = {
  FaFacebook: FaFacebook,
  FaXTwitter: FaXTwitter,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  TbBrandLeetcode: TbBrandLeetcode,
};

/**
 * Get icon component by name
 * @param {string} iconName - Name of the icon
 * @returns {React.Component} Icon component
 */
export const getIcon = (iconName) => {
  return iconMap[iconName] || null;
};
