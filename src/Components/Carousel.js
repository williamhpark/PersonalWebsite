import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Slide from "./Slide";
import ModalComp from "./ModalComp";

const algoracer = "images/algoracer.png";
const restobot = "images/restobot.png";
const netflix = "images/netflix.jpg";
const pingPongLauncher = "images/pingPongLauncher.jpg";

const Carousel = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "AlgoRacer",
      text:
        "A sorting algorithm visualizer created using React that races different sorting algorithms against each other to compare their efficiency. Try it out at <a href='https://algoracer.herokuapp.com/' target='_blank' rel='noopener noreferrer'>algoracer.herokuapp.com</a>.",
      src: algoracer,
      alt: "First slide showing the AlgoRacer site",
      link: "https://github.com/williamhpark/AlgoRacer",
      modalShow: false,
    },
    {
      id: 1,
      title: "Flicker",
      text:
        "A Tinder-esque web app designed to make the process of deciding on something to watch on Netflix with a group of people easier. Check it out at <a href='https://flickerapp.herokuapp.com/' target='_blank' rel='noopener noreferrer'>flickerapp.herokuapp.com</a>.",
      src: netflix,
      alt: "Second slide showing the Netflix logo",
      link: "https://github.com/williamhpark/movie-tinder",
      modalShow: false,
    },
    {
      id: 2,
      title: "Resto Bot",
      text:
        "An automated Facebook messenger bot with natural language processing support to help groups decide on a restaurant to dine at together. This was my group's submission for Hack the North 2020++, and we ended up placing as a finalist for the Best Use of Facebook API prize. For more information, you can check out my group's submission on <a href='https://devpost.com/software/resto-bot' target='_blank' rel='noopener noreferrer'>devpost</a>.",
      src: restobot,
      alt: "Third slide showing the Resto Bot cover image",
      link: "https://github.com/williamhpark/RestoBot",
      modalShow: false,
    },
    {
      id: 3,
      title: "Ping-Pong Ball Launcher",
      text:
        "This was a fun mini-project that I made over a weekend. An automatic ping-pong ball launcher that I use when I want to practice on my own, created using an Arduino UNO board, some cardboard and a few motors. Check out my <a href='http://williampark.site/blog/5ffad7f8e5a1773e08f9de7a' target='_blank' rel='noopener noreferrer'>blog post</a> for more details.",
      src: pingPongLauncher,
      alt: "Fourth slide showing the automatic ping-pong ball launcher",
      link: "https://github.com/williamhpark/ping_pong_launcher",
      modalShow: false,
    },
  ]);
  const [x, setX] = useState(0);

  const showModal = (id) => {
    let updatedItems = [...items];
    updatedItems[id].modalShow = true;
    setItems(updatedItems);
  };

  const hideModal = (id) => {
    let updatedItems = [...items];
    updatedItems[id].modalShow = false;
    setItems(updatedItems);
  };

  const makeSlides = (items) => {
    return items.map((item, index) => {
      return (
        <div
          className="slide"
          key={index}
          style={{ transform: `translateX(${x}%)` }}
        >
          <Slide src={item.src} alt={item.alt} title={item.title} />
          <Button
            className="details-btn"
            variant="info"
            onClick={() => showModal(item.id)}
          >
            Click for details
          </Button>
          <ModalComp
            title={item.title}
            text={item.text}
            link={item.link}
            show={item.modalShow}
            onHide={() => hideModal(item.id)}
          />
        </div>
      );
    });
  };

  const goLeft = () => {
    x === 0 ? setX(-100 * (items.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (items.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="carousel-container">
      <div className="carousel shadow-lg">
        {makeSlides(items)}
        <button id="arrow-left" onClick={goLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button id="arrow-right" onClick={goRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
