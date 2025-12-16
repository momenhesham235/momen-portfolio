import { Link } from "react-router-dom";

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
    <header className="flex">
      <div className="menu">
        <button className="icons" onClick={() => setShowModel(true)}>
          <IoIosMenu />
        </button>
      </div>

      <nav>
        <ul className="flex">
          {navbarData.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="icons" onClick={changeTheme}>
        {theme === "dark" ? <LuSunMoon /> : <IoMoonOutline />}
      </button>

      {/* responsive header */}
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <IoClose
                className="close-icon"
                onClick={() => setShowModel(false)}
              />
            </li>
            {navbarData.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  {...(item.download && { download: true })}
                  onClick={() => setShowModel(false)}
                >
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
