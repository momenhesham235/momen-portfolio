import { navbarData } from "../../constant/data/navbar";
import { useEffect, useState } from "react";

import { LuSunMoon } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { IoClose, IoMoonOutline } from "react-icons/io5";

import "./header.css";
const Header = () => {
  const [showModel, setShowModel] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", "dark");
      setTheme(localStorage.getItem("theme"));
    }
  };

  return (
    <header className="flex" id="header">
      <div className="menu">
        <button className="icons" onClick={() => setShowModel(true)}>
          <IoIosMenu aria-label="Open navigation menu" />
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

      <button className="icons" onClick={changeTheme}>
        {theme === "dark" ? (
          <LuSunMoon aria-label="Change to light mode" />
        ) : (
          <IoMoonOutline aria-label="Change to dark mode" />
        )}
      </button>

      {/* responsive header */}
      {showModel && (
        <div
          className="fixed"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          id="mobile-menu"
        >
          <ul className="model">
            <li>
              <IoClose
                className="close-icon"
                onClick={() => setShowModel(false)}
                aria-label="Close navigation menu"
              />
            </li>
            {navbarData.map((item) => (
              <li key={item.id}>
                <a href={item.link} onClick={() => setShowModel(false)}>
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
