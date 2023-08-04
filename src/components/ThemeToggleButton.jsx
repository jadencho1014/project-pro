import React, { useContext } from "react";
import { MoonIcon } from "@heroicons/react/solid";
import ThemeContext from "../ThemeContext";

const ThemeToggleButton = () => {
  const { dark, setDark } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <button className="dark-mode-button" onClick={toggleDarkMode}>
      <MoonIcon className="moon-icon" width={35} height={35} fill="#ffdb24" />
    </button>
  );
};

export default ThemeToggleButton;
