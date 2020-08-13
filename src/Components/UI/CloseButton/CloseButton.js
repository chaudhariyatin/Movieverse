import React from "react";
import CloseBtn from "../../../Assets/CloseButton.png";
import classes from "./CloseButton.module.css";

const CloseButton = (props) => {
  let styleClass = null;
  if (props.styleProp) {
    styleClass = classes.CloseButton;
  }
  return (
    <div className={styleClass} onClick={props.close}>
      <img src={CloseBtn} alt="Close Button" />
    </div>
  );
};

export default CloseButton;
