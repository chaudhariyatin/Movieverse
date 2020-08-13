import React, { Fragment } from "react";
import MovieCards from "../../Components/MovieCards/MovieCards";
import classes from "./SearchResults.module.css";
import Backdrop from "../../Components/Backdrop/Backdrop";
import CloseButton from "../../Components/UI/CloseButton/CloseButton";

const SearchResults = (props) => {
  const styleProp = true;
  let preStyle = {};
  if (!props.movieData.length) {
    preStyle = {
      height: "50px",
    };
  }

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.close} />
      <CloseButton close={props.close} styleProp={styleProp} />
      <div className={classes.SearchResults} style={{ ...preStyle }}>
        <MovieCards movieData={props.movieData} add={(i) => props.add(i)} />
      </div>
    </Fragment>
  );
};

export default SearchResults;
