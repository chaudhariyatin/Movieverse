import React, { Fragment } from "react";
import classes from "./WatchlistMovieCard.module.css";

const WatchlistMovieCard = (props) => {
  const imgLink = "https://image.tmdb.org/t/p/w185";

  return (
    <Fragment>
      <div className={classes.WatchlistMovieCard}>
        <div>
          <img src={imgLink + props.image} alt="Movie Poster" />
        </div>
        <div className={classes.Info}>
          <h4>{props.movieName}</h4>
          <h6>{props.date}</h6>
          <p>{props.description}</p>
          <div className={classes.ButtonPosition}>
            <button onClick={props.remove}>Remove</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WatchlistMovieCard;
