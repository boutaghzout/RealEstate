import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Best Website in Morocco </span>
          <span className="secondaryText">
            Take the first step towards your new home with our tailored offers
            at attractive prices .
           
            <br />
            Find your ideal residence quickly with our exclusive offers at
            competitive prices.
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
