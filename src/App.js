import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import Testimonials from "./Components/Testimonials/Testimonials";
import Portfolio from "./Components/Portfolio/Portfolio";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  const getResumeData = () => {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  };

  useEffect(() => {
    // CONFIRM THAT THIS WORKS
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
    getResumeData();
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      {/* <Testimonials data={resumeData.testimonials} /> */}
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
