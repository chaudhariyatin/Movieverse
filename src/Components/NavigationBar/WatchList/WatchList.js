import React, { Component } from "react";
import classes from "./Watchlist.module.css";

class WatchList extends Component {
  render() {
    return (
      <div
        className={classes.WatchList}
        onClick={this.props.watchlistMoviesHandler}
      >
        <h4>
          Watchlist<span>{this.props.watchlistId.length}</span>
        </h4>
      </div>
    );
  }
}

export default WatchList;
