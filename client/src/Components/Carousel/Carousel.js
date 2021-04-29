import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

import "./Carousel.css";
import algoracer from "../../assets/images/algoracer.png";
import restobot from "../../assets/images/restobot.png";
import netflix from "../../assets/images/netflix.jpg";
import pingPongLauncher from "../../assets/images/pingPongLauncher.jpg";

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
        "This was a fun mini-project that I made over a weekend. An automatic ping-pong ball launcher that I use when I want to practice on my own, created using an Arduino UNO board, some cardboard and a few motors. Check out <a href='https://youtu.be/kECmW9rIQX0' target='_blank' rel='noopener noreferrer'>this video</a> to see it in action.",
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
          <div className="slide__title-container">
            <h3 className="slide__title">{item.title}</h3>
          </div>
          <img className="slide__image" src={item.src} alt={item.alt} />
          <Modal
            closeIcon
            open={item.modalShow}
            trigger={<Button className="details-btn">Click for details</Button>}
            onClose={() => hideModal(item.id)}
            onOpen={() => showModal(item.id)}
          >
            <Header content={item.title} />
            <Modal.Content>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<p>${item.text}</p>`,
                }}
              />
              <br />
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </Modal.Content>
          </Modal>
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
          <i className="icon-left-circle"></i>
        </button>
        <button id="arrow-right" onClick={goRight}>
          <i className="icon-right-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
