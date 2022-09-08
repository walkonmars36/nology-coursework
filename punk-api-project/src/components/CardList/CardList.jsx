import React from "react";
import styles from "./CardList.module.scss";
import CardFront from "../CardFront/CardFront";

const CardList = ({beers}) => {
  return (
    <div className={styles.cardList}>
      <div className={styles.cards}>
        {beers.map((beers) => (
          <CardFront beers={beers} key={beers.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
