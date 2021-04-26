import React from "react";

const Slide = (props) => {
  const { src, alt, title } = props;
  return (
    <>
      <div className="slide__title-container">
        <h3 className="slide__title">{title}</h3>
      </div>
      <img className="slide__image" src={src} alt={alt} />
    </>
  );
};

export default Slide;
