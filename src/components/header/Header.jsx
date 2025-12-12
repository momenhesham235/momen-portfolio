import "./header.css";
import navbarData from "../../constant/data/navbar";
import { useState } from "react";

const Header = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <header className="flex">
      {/* button responsive header */}
      <button className="menu" onClick={() => setShowModel(true)}>
        menu
      </button>

      <nav>
        <ul className="flex">
          {navbarData.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button>light</button>

      {/* responsive header */}
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button onClick={() => setShowModel(false)}>X</button>
            </li>
            {navbarData.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
