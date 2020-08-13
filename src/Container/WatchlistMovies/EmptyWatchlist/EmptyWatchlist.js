import React from "react";
import EmptyImage from "../../../Assets/WatchlistMovies.png";
import classes from "./EmptyWatchlist.module.css";

const EmptyWatchlist = () => (
  <div className={classes.EmptyWatchlist}>
    <img src={EmptyImage} alt="Empty Poster" />
    <h3>Your Watchlist is currently empty</h3>
    <p>
      Add TV shows and Movies that you want to watch later by clicking Add to
      Watchlist.
    </p>
  </div>
);

export default EmptyWatchlist;
