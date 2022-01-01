import classes from "./SearchInput.module.css";

function SearchInput(props: { placeholder: string }) {
  const { placeholder } = props;
  return (
    <input type="text" placeholder={placeholder} className={classes.input} />
  );
}

export default SearchInput;
