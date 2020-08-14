import React from "react";
import "./MovieCard.css";

const movieCard = (props) => {
  const link = "https://image.tmdb.org/t/p/w185";
  const style = props.styleProp;
  let buttonStyle = {};
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
  if (props.adult) {
    buttonStyle = {
      backgroundColor: "#009378",
      color: "black",
    };
  }

  let renderCard = (
    <span>
      <h1>
        {star}
        {props.ratings}
      </h1>
      <h1>{props.movieName}</h1>
      <p>{props.date}</p>
      <div className="watchBtn">
        <button onClick={props.add} style={{ ...buttonStyle }}>
          {displaybutton}
        </button>
      </div>
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
        <div>
          <button onClick={props.add} style={{ ...buttonStyle }}>
            {displaybutton}
          </button>
        </div>
      </span>
    );
  }

  return (
    <div className={style}>
      <div>
        <img src={link + props.image} alt="movie poster" />
        {renderCard}
      </div>
    </div>
  );
};

export default movieCard;
