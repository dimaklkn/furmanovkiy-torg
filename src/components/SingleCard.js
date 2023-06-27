import React from "react";
import { useGlobalContext } from "../context";

const SingleCard = (props) => {
  const { description, image } = props;
  const { setPicture } = useGlobalContext();
  return (
    <article className="card">
      <div
        className="image-container"
        onClick={() => {
          setPicture(image);
        }}
      >
        <img src={image} alt={description} />
      </div>
      <h4>{description}</h4>
    </article>
  );
};

export default SingleCard;
