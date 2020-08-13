import React, { Fragment } from "react";
import classes from "./SearchField.module.css";

const searchField = (props) => (
  <Fragment>
    <input
      type="text"
      placeholder="Search TMDB"
      className={classes.input}
      value={props.movieName}
      onChange={props.change}
      onFocus={props.focus}
    />
  </Fragment>
);

export default searchField;
