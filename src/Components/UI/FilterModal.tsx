import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./FilterModal.module.css";
import SearchInput from "./SearchInput";

function FilterModal() {
  const content = (
    <div className={classes.modal}>
      <div className={classes["input-container"]}>
        <img src="./assets/desktop/icon-location.svg" alt="location icon" />
        <SearchInput placeholder="Filter by location…" />
      </div>
      <div className={classes["full-time-checkbox-container"]}>
        <label className={classes["checkbox-container"]}>
          <input type="checkbox" />
          <span className={classes.checkmark}></span>
        </label>
        <p>Full Time Only</p>
      </div>
      <div className={classes["button-container"]}>
        <Button text="Search" />
      </div>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("overlay-root")!
  );
}

export default FilterModal;
