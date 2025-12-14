import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { optionsSelect as options } from "../../constant/data/myProject.js";
import "./projects.css";

const FilterDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find((o) => o.value === value)?.label || "All";

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className={`dropdown-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {selectedLabel}
        <IoChevronDown className="arrow" />
      </button>

      {open && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
