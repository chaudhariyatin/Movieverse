import React, { Component, Fragment } from "react";
import MovieCard from "./MovieCard/MovieCard";
import classes from "./MovieCards.module.css";

class MovieCards extends Component {
  state = {
    movieData: [],
  };
  //https://image.tmdb.org/t/p/w185     => image prefixer
  // componentDidMount() {
  //   const url =
  //     "https://api.themoviedb.org/3/search/movie?api_key=3fc29e98cadb0edf912a8238a6c78677&language=en-US&query=Avengers&page=1&include_adult=false";
  //   Axios.get(url).then((resp) => {
  //     console.log(resp);
  //     this.setState({
  //       movieData: resp.data.results,
  //     });
  //   });
  // }

  //movieSearchHandler = (movieName) => {
  // const url =
  //   "https://api.themoviedb.org/3/search/movie?api_key=3fc29e98cadb0edf912a8238a6c78677&language=en-US&page=1&include_adult=false&query=";
  // let link = url + movieName;
  // Axios.get(link).then((resp) => {
  //   console.log(resp);
  //   this.setState({
  //     movieData: resp.data.results,
  //   });
  // });
  //};

  render() {
    // if (this.props.clearData) {
    //   this.setState({ movieData: this.state.movieData.pop() });
    // }

    // if (this.props.toggleSearch) {
    //   if (!this.state.movieData.length) {
    //     this.movieSearchHandler(this.props.movieName);
    //   }
    // }
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
