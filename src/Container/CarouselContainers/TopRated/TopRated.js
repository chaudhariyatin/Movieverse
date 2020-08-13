import React from "react";
import Carousel from "../../../Components/Carousel/Carousel";

const TopRated = (props) => {
  return (
    <div>
      <Carousel
        //   key={item.id}
        //   title={item.title}
        //   date={item.release_date}
        //   ratings={item.vote_average}
        //   image={item.poster_path}
        carouselTitle="Top Picks"
        carouselSecondHeading="TV shows and movies just for you"
        movieData={props.topRated}
        add={(i) => props.add(i)}
      />
    </div>
  );
};

export default TopRated;
