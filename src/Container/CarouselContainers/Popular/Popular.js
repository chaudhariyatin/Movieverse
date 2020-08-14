import React from "react";
import Carousel from "../../../Components/Carousel/Carousel";

const Popular = (props) => {
  return (
    <div>
      <Carousel
        carouselTitle="Fan Favorites"
        carouselSecondHeading="This week's popular TV and movies"
        movieData={props.popular}
        add={(i) => props.add(i)}
      />
    </div>
  );
};

export default Popular;
