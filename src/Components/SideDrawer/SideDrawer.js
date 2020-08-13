import React, { Fragment } from "react";
import WatchList from "../NavigationBar/WatchList/WatchList";
import classes from "./SideDrawer.module.css";
import Backdrop from "../Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <h6 style={{ display: "none" }}>User</h6>
        <NavLink
          to="/watchlist"
          exact
          style={{ textDecoration: "none", color: "white" }}
          activeStyle={{ color: "#FC8A15", textDecoration: "none" }}
        >
          <WatchList
            watchlistId={props.watchlistId}
            watchlistMoviesHandler={props.watchlistMoviesHandler}
          />
        </NavLink>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
