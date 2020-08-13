import React from "react";
import classes from "./Logo.module.css";
import MyLogo from "../../../Assets/Logo.png";
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={MyLogo} alt="Movie Verse" />
    </div>
  );
};

export default Logo;
