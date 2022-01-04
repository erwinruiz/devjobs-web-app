import classes from "./SearchInput.module.css";
import { useContext } from "react";
import { Context } from "../../store/context";

function SearchInput(props: {
  placeholder: string;
  setData: (property: string, value: string) => void;
  isFor: string;
}) {
  const { placeholder, setData, isFor } = props;
  const { selectedFilters } = useContext(Context);

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classes.input}
      onChange={(e) => setData(isFor, e.target.value)}
      defaultValue={
        isFor === "location" ? selectedFilters.location : selectedFilters.title
      }
    />
  );
}

export default SearchInput;
