import classes from "./ToggleSwitch.module.css";

function ToggleSwitch() {
  return (
    <label className={classes.switch}>
      <input type="checkbox" />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
}

export default ToggleSwitch;
