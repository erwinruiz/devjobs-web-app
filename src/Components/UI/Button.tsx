import classes from "./Button.module.css";

function Button(props: { text: string }) {
    const { text } = props;
  return <button className={classes.button}>{text}</button>;
}

export default Button;
