import React from "react";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, summary, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="slider" className="slider-image" />
          <div className="slider-content">
            <h1 className="slider-title">{title}</h1>
            <p>{summary}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider-content">
            <h1 className="slider-title">{title}</h1>
            <p>{summary}</p>
          </div>
          <img src={imageSrc} alt="slider" className="slider-image" />
        </>
      );
    }
  };

  return (
    <section className={inView ? "slider slider-zoom" : "slider"} ref={ref}>
      {renderContent()}
    </section>
  );
};

export default Slider;
