import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./FilterModal.module.css";
import SearchInput from "./SearchInput";
import { useContext, useState } from "react";
import { Context } from "../../store/context";
import Checkbox from "./Checkbox";

function FilterModal() {
  const { jobFiltersHandler, selectedFilters, modalHandler } =
    useContext(Context);
  const [enteredData, setEnteredData] = useState(selectedFilters);

  const searchHandler = () => {
    jobFiltersHandler(enteredData);
    modalHandler();
  };

  const enteredDataHandler = (property: string, value: string) => {
    setEnteredData((state) => {
      return { ...state, [property]: value };
    });
  };

  const checkboxHandler = () => {
    setEnteredData((state) => {
      return { ...state, fulltime: !state.fulltime };
    });
  };

  const content = (
    <div className={classes.modal}>
      <div className={classes["input-container"]}>
        <img src="./assets/desktop/icon-location.svg" alt="location icon" />
        <SearchInput
          placeholder="Filter by location…"
          isFor="location"
          setData={enteredDataHandler}
        />
      </div>
      <Checkbox
        text="Full Time Only"
        onChecked={checkboxHandler}
        fulltime={enteredData.fulltime}
      />
      <div className={classes["button-container"]}>
        <Button text="Search" onClick={searchHandler} />
      </div>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("overlay-root")!
  );
}

export default FilterModal;
