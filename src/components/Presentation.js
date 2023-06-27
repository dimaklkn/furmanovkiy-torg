import React from "react";

const Presentation = ({ imageSrc }) => {
  return (
    <>
      <section className="presentation-section">
        <img src={imageSrc} alt="presentation" className="presentation-image" />
        <h1 className="animate__animated animate__fadeInLeft">
          Фурмановский торг
        </h1>
        <h2 className="animate__animated animate__fadeInRight">
          «Бренд союзного масштаба»
        </h2>
      </section>
    </>
  );
};

export default Presentation;
