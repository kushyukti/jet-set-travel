import React from "react";
import "./services-card.css";

const ServicesCard = ({ item }) => {
  const { imgUrl, title, desc } = item;
  return (
    <div className="services__item">
      <img className="services__img" src={imgUrl} alt="" />
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default ServicesCard;
