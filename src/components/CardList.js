import React from "react";
import SingleCard from "./SingleCard";
import ScrollTop from "./ScrollTop";
import { data } from "../data";

const CardList = () => {
  return (
    <>
      <div className="card-list animate__animated animate__fadeInUp">
        {data.map((card) => {
          return <SingleCard {...card} key={card.id} />;
        })}
      </div>
      <ScrollTop />
    </>
  );
};

export default CardList;
