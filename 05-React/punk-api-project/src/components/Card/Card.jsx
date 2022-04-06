import React from "react";
import styles from "./Card.module.scss";

const Card = ({beers}) => {
  // When destructuring, had to give props a default of {}, otherwise I was getting property undefined and page woudn't load
  const {name, description} = beers || {};
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
