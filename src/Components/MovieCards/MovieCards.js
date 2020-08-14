import React, { Component, Fragment } from "react";
import MovieCard from "./MovieCard/MovieCard";
import classes from "./MovieCards.module.css";

class MovieCards extends Component {
  state = {
    movieData: [],
  };
  render() {
    let movieData = this.props.movieData;
    return (
      <Fragment>
        <div className={classes.MovieCards}>
          {movieData.map((item, index) => (
            <MovieCard
              key={item.id}
              movieName={item.title}
              date={item.release_date}
              ratings={item.vote_average}
              image={item.poster_path}
              adult={item.adult}
              add={() => this.props.add(index)}
              styleProp="CardHorizontal"
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default MovieCards;
