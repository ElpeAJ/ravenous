import React from "react";
import style from "./Business.module.css";

const Business = ({ business }) => {
  return (
    <div className={style.business}>
      <img src={business.imageSrc} alt={`${business.name}`} />
      <h2>{business.name}</h2>
      <div className={style.description}>
        <div className="address">
          <p>{business.address}</p>
          <p>{`${business.city}`}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className="stars">
          <div className={style.category}>{business.category}</div>
          <p className={style.rating}>{business.rating} stars</p>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
