import React from "react";
// import classes from "./Logo.module.css";
import menu from "../../../Assets/HamburgerMenu.png";
import classes from "./HamburgerMenu.module.css";
const HamburgerMenu = (props) => {
  return (
    <div className={classes.HamburgerMenu} onClick={props.toggleSideDrawer}>
      <img src={menu} alt="Menu" />
    </div>
  );
};

export default HamburgerMenu;
