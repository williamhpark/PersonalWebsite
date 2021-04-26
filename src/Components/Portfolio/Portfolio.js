import React, { Component } from "react";

import "./Portfolio.css";
import Carousel from "../Carousel/Carousel.js";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects</h1>
            <Carousel />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
