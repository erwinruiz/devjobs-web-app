import classes from "./Button.module.css";

function Button(props: { text: string; onClick?: () => void }) {
  const { text, onClick } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
