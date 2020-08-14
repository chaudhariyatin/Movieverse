import React from "react";
import Carousel from "../../../Components/Carousel/Carousel";

const Nowplaying = (props) => {
  return (
    <div>
      <Carousel
        carouselTitle="Now Playing"
        carouselSecondHeading="This week's top TV and movies"
        movieData={props.nowPlaying}
        add={(i) => props.add(i)}
      />
    </div>
  );
};
export default Nowplaying;
