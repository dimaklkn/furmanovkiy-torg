import React from "react";
import person from "../nina-klyukina.jpg.jpg";
import ScrollTop from "../components/ScrollTop";

export default function About() {
  return (
    <>
      <section className="section about-section">
        <div className="events-result animate__animated animate__fadeInUp">
          <h1 className="section-title animate__animated animate__fadeInDown">
            О проекте
          </h1>

          <h4>История фурмановского торга</h4>
          <p className="animate__animated animate__fadeInUp">summary</p>
          <img className="person" src={person} alt="Nina Klyukina" />
          <p className="sign">&#8212;Нина Клюкина</p>
        </div>
      </section>
      <ScrollTop />
    </>
  );
}
