import React, { Component } from "react";
import classes from "./NavigationBar.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";

import WatchList from "./WatchList/WatchList";
import User from "./User/User";
import HamburgerMenu from "../UI/HamburgerMenu/HamburgerMenu";
import { NavLink } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <header className={classes.NavigationBar}>
        <div>
          <HamburgerMenu toggleSideDrawer={this.props.toggleSideDrawer} />
        </div>
        <div>
          <Logo />
        </div>
        <div>
          <SearchBar
            toggleSearch={this.props.toggleSearch}
            movieName={this.props.movieName}
            change={this.props.change}
            toggle={this.props.toggle}
            focus={this.props.focus}
          />
        </div>
        {/* <div>
          <h4>Home</h4>
        </div> */}
        <NavLink
          to="/watchlist"
          exact
          style={{ textDecoration: "none", color: "white" }}
          activeStyle={{ color: "#FC8A15", textDecoration: "none" }}
        >
          <div className={classes.Hide}>
            <WatchList
              watchlistId={this.props.watchlistId}
              watchlistMoviesHandler={this.props.watchlistMoviesHandler}
            />
          </div>
        </NavLink>
        <div style={{ display: "none" }}>
          <User />
        </div>
      </header>
    );
  }
}

export default NavigationBar;
