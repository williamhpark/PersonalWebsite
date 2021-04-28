import React from "react";

import "./About.css";
import resume from "../../assets/documents/resume_WilliamPark.pdf";

const About = (props) => {
  let profilePic = "";
  let bio = "";
  if (props.data) {
    profilePic = "images/" + props.data.image;
    bio = props.data.bio;
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
          <p>{bio}</p>
          <div className="row">
            <div className="columns download">
              <p>
                <a
                  href={resume}
                  className="button"
                  download="WilliamPark_resume"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
