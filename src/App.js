import React, { Component } from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Axios from "axios";
import classes from "./App.module.css";
import Home from "./Components/Home/Home";
import SearchResults from "./Container/SearchResults/SearchResults";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
//import CloseButton from "./Components/UI/CloseButton/CloseButton";
import WatchlistMovies from "./Container/WatchlistMovies/WatchlistMovies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  state = {
    movieName: "",
    toggleSearch: false,
    clearData: false,
    movieData: [],
    toggleBackdrop: false,
    nowPlaying: [],
    popular: [],
    topRated: [],
    watchlistId: [],
    // 385103, 385102, 385101, 385100
    watchlistMovies: [],
    toggleSideDrawer: false,
  };

  componentDidMount() {
    this.nowPlayingDataHandler();
    this.popularMovieDataHandler();
    this.topRatedMovieDataHandler();
    // this.watchlistMoviesHandler();
  }

  watchlistMoviesHandler = () => {
    if (this.state.watchlistMovies.length) {
      this.setState({
        watchlistMovies: [],
      });
    }
    this.state.watchlistId.forEach((element) => {
      let watchlistMoviesLink = `https://api.themoviedb.org/3/movie/${element}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
      Axios.get(watchlistMoviesLink)
        // .then((resp) => console.log(resp.data))
        .then((resp) => {
          this.setState({
            watchlistMovies: [...this.state.watchlistMovies, resp.data],
          });
        });
    });
  };

  nowPlayingDataHandler = () => {
    const nowPlayingLink = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    Axios.get(nowPlayingLink).then((resp) => {
      this.setState({
        nowPlaying: resp.data.results,
      });
    });
  };

  popularMovieDataHandler = () => {
    const popularMovieLink = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    Axios.get(popularMovieLink).then((resp) => {
      this.setState({
        popular: resp.data.results,
      });
    });
  };

  topRatedMovieDataHandler = () => {
    const topRatedLink = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    Axios.get(topRatedLink).then((resp) => {
      this.setState({
        topRated: resp.data.results,
      });
    });
  };

  toggleSearchHandler = (e) => {
    // this.setState({ toggleSearch: true });
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=`;
    let link = url + this.state.movieName;
    Axios.get(link)
      .then((resp) => {
        this.setState({
          movieData: resp.data.results,
        });
      })
      .catch((error) => {
        console.log("somethng went wrong!");
      });
    e.preventDefault();
  };

  addFromSearchResultHandler = (i) => {
    const searchResultId = this.state.movieData[i].id;
    const removeRedundancy = this.state.watchlistId.filter(
      (item) => item !== searchResultId
    );
    if (this.state.watchlistId.length === 0) {
      this.setState({
        watchlistId: [...this.state.watchlistId, searchResultId],
      });
    } else if (this.state.watchlistId.length === removeRedundancy.length) {
      this.setState({
        watchlistId: [...this.state.watchlistId, searchResultId],
      });
    } else {
      this.setState({
        watchlistId: [...removeRedundancy],
      });
    }

    let newAdultState = !this.state.movieData[i].adult;

    const updatedCopy = {
      ...this.state.movieData[i],
      adult: newAdultState,
    };

    const updatedArrayIndex = this.state.movieData.findIndex((item) => {
      return item.id === this.state.movieData[i].id;
    });

    const updatedArray = [...this.state.movieData];

    if (updatedArrayIndex >= 0) {
      updatedArray[updatedArrayIndex] = updatedCopy;
    }

    if (this.state.movieData[i].id === searchResultId) {
      this.setState({
        movieData: [...updatedArray],
      });
    }
  };

  onFocusHandler = () => {
    this.setState({
      toggleBackdrop: true,
    });
  };

  closeBackdropHandler = () => {
    this.setState({
      toggleBackdrop: false,
    });
  };

  onChangeHandler = (e) => {
    this.setState({ movieName: e.target.value });
  };

  toggleSideDrawerHandler = () => {
    this.setState({
      toggleSideDrawer: !this.state.toggleSideDrawer,
    });
  };

  removeWatchlisthandler = (i) => {
    const removeId = this.state.watchlistMovies[i].id;
    const updatedWatchlistMovies = this.state.watchlistMovies.filter(
      (item) => item.id !== removeId
    );
    const updatedWatchlistId = this.state.watchlistId.filter(
      (item) => item !== removeId
    );
    this.setState({
      watchlistMovies: [...updatedWatchlistMovies],
      watchlistId: [...updatedWatchlistId],
    });
    this.watchlistButtonStateHandler(removeId);
  };

  watchlistButtonStateHandler = (id) => {
    const removedId = id;
    const oldCopyNowplayingMovie = this.state.nowPlaying.filter(
      (item) => item.id === removedId
    );
    const oldCopyPopularMovie = this.state.popular.filter(
      (item) => item.id === removedId
    );
    const oldCopyTopratedMovie = this.state.topRated.filter(
      (item) => item.id === removedId
    );
    const oldCopyMovieDataMovie = this.state.movieData.filter(
      (item) => item.id === removedId
    );

    if (oldCopyNowplayingMovie.length !== 0) {
      const updatedNowplayingMovieInfo = {
        ...oldCopyNowplayingMovie[0],
        adult: false,
      };
      const indexInNowplaying = this.state.nowPlaying.findIndex(
        (item) => item.id === removedId
      );
      const copyOfNowplaying = [...this.state.nowPlaying];
      if (indexInNowplaying >= 0) {
        copyOfNowplaying[indexInNowplaying] = updatedNowplayingMovieInfo;
      }
      if (this.state.nowPlaying[indexInNowplaying].id === removedId) {
        this.setState({
          nowPlaying: [...copyOfNowplaying],
        });
      }
    }

    if (oldCopyPopularMovie.length !== 0) {
      const updatedPopularMovieInfo = {
        ...oldCopyPopularMovie[0],
        adult: false,
      };
      const indexInPopular = this.state.popular.findIndex(
        (item) => item.id === removedId
      );
      const copyOfPopular = [...this.state.popular];
      if (indexInPopular >= 0) {
        copyOfPopular[indexInPopular] = updatedPopularMovieInfo;
      }
      if (this.state.popular[indexInPopular].id === removedId) {
        this.setState({
          popular: [...copyOfPopular],
        });
      }
    }

    if (oldCopyTopratedMovie.length !== 0) {
      const updatedTopratedMovieInfo = {
        ...oldCopyTopratedMovie[0],
        adult: false,
      };
      const indexInToprated = this.state.topRated.findIndex(
        (item) => item.id === removedId
      );
      const copyOfToprated = [...this.state.topRated];
      if (indexInToprated >= 0) {
        copyOfToprated[indexInToprated] = updatedTopratedMovieInfo;
      }
      if (this.state.topRated[indexInToprated].id === removedId) {
        this.setState({
          topRated: [...copyOfToprated],
        });
      }
    }

    if (oldCopyMovieDataMovie.length !== 0) {
      const updatedMoviedataMovieInfo = {
        ...oldCopyMovieDataMovie[0],
        adult: false,
      };
      const indexInMoviedata = this.state.movieData.findIndex(
        (item) => item.id === removedId
      );
      const copyOfMoviedata = [...this.state.movieData];
      if (indexInMoviedata >= 0) {
        copyOfMoviedata[indexInMoviedata] = updatedMoviedataMovieInfo;
      }
      if (this.state.movieData[indexInMoviedata].id === removedId) {
        this.setState({
          movieData: [...copyOfMoviedata],
        });
      }
    }
  };

  //addWatchlistHandle
  addFromNowPlayingHandler = (i) => {
    const nowPlayingId = this.state.nowPlaying[i].id;
    const removeRedundancy = this.state.watchlistId.filter(
      (item) => item !== nowPlayingId
    );
    if (this.state.watchlistId.length === 0) {
      this.setState({
        watchlistId: [...this.state.watchlistId, nowPlayingId],
      });
    } else if (this.state.watchlistId.length === removeRedundancy.length) {
      this.setState({
        watchlistId: [...this.state.watchlistId, nowPlayingId],
      });
    } else {
      this.setState({
        watchlistId: [...removeRedundancy],
      });
    }

    let newAdultState = !this.state.nowPlaying[i].adult;

    const updatedCopy = {
      ...this.state.nowPlaying[i],
      adult: newAdultState,
    };
    const updatedArrayIndex = this.state.nowPlaying.findIndex((item) => {
      return item.id === this.state.nowPlaying[i].id;
    });

    const updatedArray = [...this.state.nowPlaying];

    if (updatedArrayIndex >= 0) {
      updatedArray[updatedArrayIndex] = updatedCopy;
    }

    if (this.state.nowPlaying[i].id === nowPlayingId) {
      this.setState({
        nowPlaying: [...updatedArray],
      });
    }
  };

  addFromPopularHandler = (i) => {
    const popularId = this.state.popular[i].id;
    const removeRedundancy = this.state.watchlistId.filter(
      (item) => item !== popularId
    );
    if (this.state.watchlistId.length === 0) {
      this.setState({
        watchlistId: [...this.state.watchlistId, popularId],
      });
    } else if (this.state.watchlistId.length === removeRedundancy.length) {
      this.setState({
        watchlistId: [...this.state.watchlistId, popularId],
      });
    } else {
      this.setState({
        watchlistId: [...removeRedundancy],
      });
    }

    let newAdultState = !this.state.popular[i].adult;

    const updatedCopy = {
      ...this.state.popular[i],
      adult: newAdultState,
    };

    const updatedArrayIndex = this.state.popular.findIndex((item) => {
      return item.id === this.state.popular[i].id;
    });

    const updatedArray = [...this.state.popular];

    if (updatedArrayIndex >= 0) {
      updatedArray[updatedArrayIndex] = updatedCopy;
    }

    if (this.state.popular[i].id === popularId) {
      this.setState({
        popular: [...updatedArray],
      });
    }
  };

  addFromTopratedHandler = (i) => {
    const topRatedId = this.state.topRated[i].id;
    const removeRedundancy = this.state.watchlistId.filter(
      (item) => item !== topRatedId
    );
    if (this.state.watchlistId.length === 0) {
      this.setState({
        watchlistId: [...this.state.watchlistId, topRatedId],
      });
    } else if (this.state.watchlistId.length === removeRedundancy.length) {
      this.setState({
        watchlistId: [...this.state.watchlistId, topRatedId],
      });
    } else {
      this.setState({
        watchlistId: [...removeRedundancy],
      });
    }

    let newAdultState = !this.state.topRated[i].adult;

    const updatedCopy = {
      ...this.state.topRated[i],
      adult: newAdultState,
    };

    const updatedArrayIndex = this.state.topRated.findIndex((item) => {
      return item.id === this.state.topRated[i].id;
    });

    const updatedArray = [...this.state.topRated];

    if (updatedArrayIndex >= 0) {
      updatedArray[updatedArrayIndex] = updatedCopy;
    }

    if (this.state.topRated[i].id === topRatedId) {
      this.setState({
        topRated: [...updatedArray],
      });
    }
  };

  render() {
    let searchResults = null;
    if (this.state.toggleBackdrop && this.state.movieName) {
      searchResults = (
        <SearchResults
          movieName={this.state.movieName}
          show={this.state.toggleBackdrop}
          movieData={this.state.movieData}
          close={this.closeBackdropHandler}
          add={(i) => this.addFromSearchResultHandler(i)}
        />
      );
    }

    return (
      <Router>
        <div className={classes.App}>
          <SideDrawer
            open={this.state.toggleSideDrawer}
            closed={this.toggleSideDrawerHandler}
            watchlistId={this.state.watchlistId}
            watchlistMoviesHandler={this.watchlistMoviesHandler}
          />
          <NavigationBar
            toggleSearch={this.state.toggleSearch}
            movieName={this.state.movieName}
            change={(e) => this.onChangeHandler(e)}
            toggle={this.toggleSearchHandler}
            focus={this.onFocusHandler}
            watchlistId={this.state.watchlistId}
            toggleSideDrawer={this.toggleSideDrawerHandler}
            watchlistMoviesHandler={this.watchlistMoviesHandler}
          />
          {searchResults}
          {/* <h1 className={classes.Header}>Explore movies & TV shows</h1> */}

          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <div>
                  <Home
                    {...props}
                    hello="hello!"
                    nowPlaying={this.state.nowPlaying}
                    popular={this.state.popular}
                    topRated={this.state.topRated}
                    addFromNowPlaying={(i) => this.addFromNowPlayingHandler(i)}
                    addFromPopular={(i) => this.addFromPopularHandler(i)}
                    addFromToprated={(i) => this.addFromTopratedHandler(i)}
                  />
                </div>
              )}
            />
            <Route
              path="/watchlist"
              render={(props) => (
                <div>
                  <h1
                    style={{
                      fontSize: "30px",
                      color: "#F5C518",
                      textAlign: "center",
                    }}
                  >
                    Watchlist
                  </h1>
                  <WatchlistMovies
                    {...props}
                    remove={(index) => this.removeWatchlisthandler(index)}
                    watchlistMovies={this.state.watchlistMovies}
                    watchlistId={this.state.watchlistId}
                  />
                </div>
              )}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
