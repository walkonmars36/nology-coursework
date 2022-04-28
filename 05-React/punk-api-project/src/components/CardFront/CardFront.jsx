import React from "react";
import styles from "./CardFront.module.scss";

const Card = ({beers}) => {
  // When destructuring, had to give props a default of {}, otherwise I was getting property undefined and page woudn't load
  const {name, description, abv} = beers || {};
  return (
    <div className={styles.cardFront}>
      <p>{name}</p>
      <p>{description}</p>
      <p>{abv}</p>
    </div>
  );
};

export default Card;
