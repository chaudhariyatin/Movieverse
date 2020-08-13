import React from "react";
import classes from "./Spinner.module.css";

const Spinner = (props) => (
  <div className={classes.Container}>
    <div className={classes.ldsring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
