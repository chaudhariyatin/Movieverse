import React from "react";
import "./MovieCard.css";

const movieCard = (props) => {
  const link = "https://image.tmdb.org/t/p/w185";
  const style = props.styleProp;
  const star = <span className="star"></span>;
  let displaybutton = "+ Watchlist";
  if (props.adult) {
    displaybutton = (
      <div>
        <span className="heavy_check_mark"></span>
        Watchlist
      </div>
    );
  }

  let renderCard = (
    <span>
      <h1>
        {star}
        {props.ratings}
      </h1>
      <h1>{props.movieName}</h1>
      <p>{props.date}</p>
      <button onClick={props.add}>{displaybutton}</button>
    </span>
  );
  if (props.styleProp === "CardHorizontal") {
    renderCard = (
      <span>
        <h1>{props.movieName}</h1>
        <h1>
          {star}
          {props.ratings}
        </h1>
        <p>{props.date}</p>
        <button onClick={props.add}>{displaybutton}</button>
      </span>
    );
  }

  return (
    <div className={style}>
      <div>
        <img
          // src="https://m.media-amazon.com/images/M/MV5BZTFkZjYxNWItZmE2MC00MGE4LWIxYTgtZmIzOWM1YmI2YWEzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
          src={link + props.image}
          alt="movie poster"
        />
        {renderCard}
      </div>
    </div>
  );
};

export default movieCard;
