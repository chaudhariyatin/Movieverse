import React, { Fragment } from "react";
import WatchlistMovieCard from "../../Components/WatchlistMovieCard/WatchlistMovieCard";
import classes from "./WatchlistMovies.module.css";
import EmptyWatchlist from "./EmptyWatchlist/EmptyWatchlist";
import Spinner from "../../Components/Spinner/Spinner";

const WatchlistMovies = (props) => {
  let showCard = <Spinner />;
  if (!props.watchlistId.length) {
    return (showCard = <EmptyWatchlist />);
  } else if (props.watchlistMovies.length) {
    return (showCard = (
      <div className={classes.WatchlistMovies}>
        {props.watchlistMovies.map((item, index) => (
          <WatchlistMovieCard
            key={item.id}
            image={item.poster_path}
            movieName={item.title}
            date={item.release_date}
            description={item.overview}
            remove={() => props.remove(index)}
          />
        ))}
      </div>
    ));
  }
  return <Fragment>{showCard}</Fragment>;
};

export default WatchlistMovies;
