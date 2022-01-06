import classes from "./SearchFilter.module.css";
import { useContext, useState } from "react";
import { Context } from "../store/context";
import SearchInput from "./UI/SearchInput";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";

function SearchFilter() {
  const { modalHandler, jobFiltersHandler, selectedFilters } =
    useContext(Context);
  const [enteredData, setEnteredData] = useState(selectedFilters);

  const filterHandler = () => {
    modalHandler();
  };

  const searchHandler = () => {
    jobFiltersHandler(enteredData);
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

  return (
    <div className={classes.container}>
      <div className={classes["title-filter-container"]}>
        <img src="./assets/desktop/icon-search.svg" alt="search icon" />
        <div className={classes["input-title-short-text"]}>
          <SearchInput
            placeholder="Filter by title…"
            isFor="title"
            setData={enteredDataHandler}
          />
        </div>
        <div className={classes["input-title-large-text"]}>
          <SearchInput
            placeholder="Filter by title, companies, expertise…"
            isFor="title"
            setData={enteredDataHandler}
          />
        </div>
      </div>
      <div className={classes["right-side"]}>
        <div className={classes["filter-options"]} onClick={filterHandler}>
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
              fill="#6E8098"
              fillRule="nonzero"
            />
          </svg>
        </div>
        <div
          className={classes["search-icon-container"]}
          onClick={searchHandler}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill="#FFFFFF"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      <div className={classes["tablet-desktop-options"]}>
        <div className={classes["location-filter-container"]}>
          <img src="./assets/desktop/icon-location.svg" alt="location icon" />
          <SearchInput
            placeholder="Filter by location…"
            isFor="location"
            setData={enteredDataHandler}
          />
        </div>
        <div className={classes["checkbox-short-text"]}>
          <Checkbox
            text="Full Time"
            onChecked={checkboxHandler}
            fulltime={enteredData.fulltime}
            className={classes.checkbox}
          />
        </div>
        <div className={classes["checkbox-full-text"]}>
          <Checkbox
            text="Full Time Only"
            onChecked={checkboxHandler}
            fulltime={enteredData.fulltime}
            className={classes.checkbox}
          />
        </div>
        <div className={classes["button-container"]}>
          <Button text="Search" onClick={searchHandler} />
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
