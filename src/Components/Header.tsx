import classes from "./Header.module.css";
import ToggleSwitch from "./UI/ToggleSwitch";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <img
        src="./assets/desktop/logo.svg"
        alt="logo"
        className={classes.logo}
        onClick={() => navigate("/")}
      />
      <div className={classes["toggle-theme-container"]}>
        <img src="./assets/desktop/icon-sun.svg" alt="sun icon" />
        <ToggleSwitch />
        <img src="./assets/desktop/icon-moon.svg" alt="moon icon" />
      </div>
    </header>
  );
}

export default Header;
