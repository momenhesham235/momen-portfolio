import { useEffect, useMemo, useRef, useState } from "react";

import { optionsSelect as options } from "@constant/data/myProject.js";

const useFilterDropdown = (value) => {
  const [open, setOpen] = useState(false);

  const selectedLabel = useMemo(() => {
    return options.find((o) => o.value === value)?.label || "all";
  }, [value]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return { open, setOpen, selectedLabel, dropdownRef };
};

export default useFilterDropdown;
