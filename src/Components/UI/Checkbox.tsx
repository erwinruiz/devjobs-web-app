import classes from "./Checkbox.module.css";

type CheckboxProps = {
  text: string;
  onChecked: () => void;
  fulltime: boolean;
  className?: string;
};

function Checkbox(props: CheckboxProps) {
  const { text, onChecked, fulltime, className } = props;

  return (
    <div className={`${classes["full-time-checkbox-container"]} ${className}`}>
      <label className={classes["checkbox-container"]}>
        <input type="checkbox" onChange={onChecked} checked={fulltime} />
        <span className={classes.checkmark}></span>
      </label>
      <p>{text}</p>
    </div>
  );
}

export default Checkbox;
