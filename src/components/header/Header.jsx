import "./header.css";

import { navbarData } from "../../constant/data/navbar";
import { useState } from "react";

import { LuSunMoon } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { IoClose, IoMoonOutline } from "react-icons/io5";

const Header = () => {
  const [showModel, setShowModel] = useState(false);

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
              <a href={item.link} {...(item.download && { download: true })}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <button className="icons">
          <IoMoonOutline />
        </button>
      </div>

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
