import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";
import { useContext } from "react";
import { Context } from "../../store/context";

function Backdrop() {
  const { modalHandler } = useContext(Context);

  const content = (
    <div className={classes.backdrop} onClick={modalHandler}></div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("backdrop-root")!
  );
}

export default Backdrop;
