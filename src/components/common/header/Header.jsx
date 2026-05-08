import { useState } from "react";
import { navbarData } from "../../../constant/data/navbar";
import { useTheme } from "@hooks/use-theme";
import { useFocusTrap } from "@hooks/use-focus-trap";
import { useLockBodyScroll } from "@hooks/use-lock-body-scroll";

import { LuSunMoon } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { IoClose, IoMoonOutline } from "react-icons/io5";

import "./header.css";

/**
 * Header Component
 * Main navigation with theme toggle and mobile menu
 */
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Accessibility hooks
  const menuRef = useFocusTrap(showMenu);
  useLockBodyScroll(showMenu);

  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <header className="flex" id="header">
      <div className="menu">
        <button 
          className="icons" 
          onClick={handleMenuToggle}
          aria-label="Open navigation menu"
          aria-expanded={showMenu}
          aria-controls="mobile-menu"
        >
          <IoIosMenu aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Main Navigation">
        <ul className="flex">
          {navbarData.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button 
        className="icons" 
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <LuSunMoon aria-hidden="true" />
        ) : (
          <IoMoonOutline aria-hidden="true" />
        )}
      </button>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          className="fixed"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          id="mobile-menu"
          ref={menuRef}
        >
          <ul className="model">
            <li>
              <button
                className="close-icon"
                onClick={handleMenuClose}
                aria-label="Close navigation menu"
              >
                <IoClose aria-hidden="true" />
              </button>
            </li>
            {navbarData.map((item) => (
              <li key={item.id}>
                <a href={item.link} onClick={handleLinkClick}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
