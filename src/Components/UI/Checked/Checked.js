import React from "react";
import Correct from "../../../Assets/Correct.png";
import classes from "./Checked.module.css";
const Checked = () => {
  return (
    <div className={classes.Checked}>
      <img src={Correct} alt="Movie Added" />
    </div>
  );
};

export default Checked;
