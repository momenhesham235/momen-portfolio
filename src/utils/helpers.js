/**
 * Utility helper functions
 */

/**
 * Truncate text to a specified length
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text with ellipsis
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

/**
 * Format phone number for WhatsApp link
 * @param {string} phone - Phone number
 * @returns {string} Formatted WhatsApp URL
 */
export const formatWhatsAppLink = (phone) => {
  return `https://wa.me/${phone}`;
};

/**
 * Format email link with subject
 * @param {string} email - Email address
 * @param {string} subject - Email subject
 * @returns {string} Formatted mailto URL
 */
export const formatEmailLink = (email, subject = "Contact From Portfolio") => {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
};

/**
 * Get current year for copyright
 * @returns {number} Current year
 */
export const getCurrentYear = () => {
  return new Date().getFullYear();
};
