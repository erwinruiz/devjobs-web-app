import classes from "./ToggleSwitch.module.css";
import { useState } from "react";

function ToggleSwitch() {
  // Detect if the user has dark color theme.
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkThemeMode, setIsDarkThemeMode] = useState(isDarkMode);

  const toggleThemeHandler = () => {
    if (isDarkThemeMode) {
      document.documentElement.setAttribute("theme-mode", "light");
      setIsDarkThemeMode(false);
    } else {
      document.documentElement.setAttribute("theme-mode", "dark");
      setIsDarkThemeMode(true);
    }
  };

  return (
    <label className={classes.switch}>
      <input
        type="checkbox"
        defaultChecked={isDarkMode}
        onChange={toggleThemeHandler}
      />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
}

export default ToggleSwitch;
