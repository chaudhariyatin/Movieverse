import React, { Component } from "react";
// import SearchField from "./SearchField/SearchField";
import classes from "./SearchBar.module.css";
import SearchIcon from "../../../Assets/SearchIcon.png";

class SearchBar extends Component {
  render() {
    const searchIcon = (
      <img src={SearchIcon} style={{ width: "24px" }} alt="Icon" />
    );
    return (
      <div className={classes.Searchbar}>
        <form onSubmit={this.props.toggle}>
          <input
            type="text"
            placeholder="Search TMDB"
            className={classes.input}
            value={this.props.movieName}
            onChange={this.props.change}
            onFocus={this.props.focus}
          />

          <button>{searchIcon}</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
