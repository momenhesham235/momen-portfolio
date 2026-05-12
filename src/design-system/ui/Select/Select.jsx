import { useEffect, useId, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import "./select.css";

const Select = ({
  value,
  onChange,
  options,
  placeholder,
  className = "",
  "aria-label": ariaLabel,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listboxId = useId();

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selected = options.find((option) => option.value === value);
  const buttonLabel = selected?.label ?? placeholder ?? "";

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={["ds-select", className].filter(Boolean).join(" ")}
      {...props}
    >
      <button
        type="button"
        className={`ds-select__button ${open ? "is-open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={ariaLabel}
      >
        <span className="ds-select__value">{buttonLabel}</span>
        <IoChevronDown className="ds-select__arrow" aria-hidden="true" />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          className="ds-select__menu"
          aria-label={ariaLabel}
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                className={`ds-select__option ${isSelected ? "is-selected" : ""}`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
