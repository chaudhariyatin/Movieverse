import React, { Fragment } from "react";
import Nowplaying from "../../Container/CarouselContainers/NowPlaying/Nowplaying";
import Popular from "../../Container/CarouselContainers/Popular/Popular";
import TopRated from "../../Container/CarouselContainers/TopRated/TopRated";
import Spinner from "../Spinner/Spinner";
import classes from "./Home.module.css";
const Home = (props) => {
  let showHome = <Spinner />;
  if (
    props.nowPlaying.length &&
    props.popular.length &&
    props.topRated.length
  ) {
    return (showHome = (
      <div style={{ marginBottom: "100px" }}>
        <h1 className={classes.Header}>Explore movies & TV shows</h1>
        <Nowplaying
          nowPlaying={props.nowPlaying}
          add={(i) => props.addFromNowPlaying(i)}
        />
        <Popular popular={props.popular} add={(i) => props.addFromPopular(i)} />
        <TopRated
          topRated={props.topRated}
          add={(i) => props.addFromToprated(i)}
        />
      </div>
    ));
  }
  return <Fragment>{showHome}</Fragment>;
};

export default Home;
