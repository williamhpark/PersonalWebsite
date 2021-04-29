import React from "react";

import "./About.css";

const About = (props) => {
  let profilePic = "";
  let bio = "";
  let song = "";
  let movieImage = "";
  let movieLink = "";
  let bookImage = "";
  let bookLink = "";
  if (props.data) {
    profilePic = "images/" + props.data.image;
    bio = props.data.bio;
    song = props.data.song.link;
    movieImage = props.data.movie.image;
    movieLink = props.data.movie.link;
    bookImage = props.data.book.image;
    bookLink = props.data.book.link;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilePic}
            alt="William Park Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>
            {bio} If you want to see some of the music I like playing, check out
            my instagram account{" "}
            <a
              href="https://www.instagram.com/williamparkmusic/"
              target="_blank"
              rel="noreferrer"
            >
              @williamparkmusic
            </a>
            .
          </p>
        </div>
      </div>
      <div className="fav-things">
        <div className="row">
          <div className="twelve columns">
            <h3>My favourite things this month</h3>
          </div>
        </div>
        <div className="row">
          <div className="four columns">
            <p>Song</p>
            <iframe
              src={song}
              width="235"
              height="235"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div className="four columns">
            <p>Movie</p>
            <a href={movieLink} target="_blank" rel="noreferrer">
              <img
                src={movieImage}
                alt="Movie poster"
                width="235"
                height="235"
              />
            </a>
          </div>
          <div className="four columns">
            <p>Book</p>
            <a href={bookLink} target="_blank" rel="noreferrer">
              <img src={bookImage} alt="Book cover" width="235" height="235" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
