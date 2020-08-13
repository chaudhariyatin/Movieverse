import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Container}>
      <footer className={classes.Footer}>
        <h6>
          Made in India with<span className={classes.heart}></span>
        </h6>
        <h4>
          Above data is Sourced from{" "}
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="The Movie Database (TMDb)"
            width="154"
            height="20"
          ></img>
        </h4>
      </footer>
    </div>
  );
};

export default Footer;
