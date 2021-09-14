import React from "react";

import "./Resume.css";
import resume from "../../assets/documents/resume_WilliamPark.pdf";

const Resume = (props) => {
  let education;
  let work;
  if (props.data) {
    education = props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          {education.description.map(function (point) {
            return <p>{point}</p>;
          })}
          <br />
        </div>
      );
    });
    work = props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          {work.description.map(function (point) {
            return <p>{point}</p>;
          })}
          <br />
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row">
        <div className="download">
          <p>
            <a href={resume} className="button" download="WilliamPark_resume">
              <i className="fa fa-download"></i>Download Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
