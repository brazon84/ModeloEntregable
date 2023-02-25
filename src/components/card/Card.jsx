import React from "react";
import Button from "../Button/Button";

import "./Card.css";

const Card = ({ framework, changeFramework }) => {
  return (
    <section className="card">
      <div className="card__container-img">
        <img src={framework.logo} alt={framework.name} />
      </div>
      <h2 className="card__title">{framework.name}</h2>
      <p className="card__description">{framework.description}</p>

      <div className="card__container-btn">
        <Button handleClick={changeFramework} />
      </div>
    </section>
  );
};

export default Card;