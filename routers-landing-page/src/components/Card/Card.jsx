//create a functional card component which has an image in the center and name under

import React from "react";
import "./Card.css";

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
