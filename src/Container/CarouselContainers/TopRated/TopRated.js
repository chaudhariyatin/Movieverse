import React from "react";
import Carousel from "../../../Components/Carousel/Carousel";

const TopRated = (props) => {
  return (
    <div>
      <Carousel
        carouselTitle="Top Picks"
        carouselSecondHeading="TV shows and movies just for you"
        movieData={props.topRated}
        add={(i) => props.add(i)}
      />
    </div>
  );
};

export default TopRated;
