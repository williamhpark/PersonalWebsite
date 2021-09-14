import React from "react";

import "./Header.css";

const Header = (props) => {
  let firstname = "";
  let occupation = "";
  let degree = "";
  let school = "";
  let city = "";
  let networks = "";
  if (props.data) {
    firstname = props.data.firstname;
    occupation = props.data.occupation;
    degree = props.data.degree;
    school = props.data.school;
    city = props.data.address.city;
    networks = props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resumé
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Hi, I'm {firstname}!</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>, currently in the{" "}
            <span>{degree}</span> program at the <span>{school}</span>.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
