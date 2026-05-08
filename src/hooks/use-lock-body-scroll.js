import { useEffect } from "react";

/**
 * Custom hook to lock body scroll when modal is open
 * Prevents background scrolling when modal/menu is active
 * 
 * @param {boolean} isLocked - Whether to lock the scroll
 */
export const useLockBodyScroll = (isLocked) => {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Prevent layout shift by adding padding for scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
};
