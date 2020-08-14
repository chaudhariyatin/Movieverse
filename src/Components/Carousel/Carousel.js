import React, { Component, Fragment } from "react";
import MovieCard from "../MovieCards/MovieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            // initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            // initialSlide: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <Fragment>
        <div className="Container">
          <div className="ContainerHeader">
            <h1>{this.props.carouselTitle}</h1>
            {/* <p>This week's top TV and movies</p> */}
            <p>{this.props.carouselSecondHeading}</p>
          </div>

          <Slider {...settings} key={this.props.movieData.id}>
            {this.props.movieData.map((item, index) => (
              <MovieCard
                key={index}
                ratings={item.vote_average}
                movieName={item.title}
                image={item.poster_path}
                date={item.release_date}
                adult={item.adult}
                // add={(index) => this.props.add(index)}
                add={() => this.props.add(index)}
                styleProp="Card"
              />
            ))}
          </Slider>
        </div>
      </Fragment>
    );
  }
}

export default Carousel;
