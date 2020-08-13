import React from "react";
import Carousel from "../../../Components/Carousel/Carousel";

const Nowplaying = (props) => {
  return (
    <div>
      <Carousel
        //   title={item.title}
        //   date={item.release_date}
        //   ratings={item.vote_average}
        //   image={item.poster_path}
        carouselTitle="Now Playing"
        carouselSecondHeading="This week's top TV and movies"
        movieData={props.nowPlaying}
        add={(i) => props.add(i)}
      />
    </div>
  );
};
export default Nowplaying;
