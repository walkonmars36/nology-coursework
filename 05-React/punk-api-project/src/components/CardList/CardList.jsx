import React from "react";
import styles from "./CardList.module.scss";
import CardFront from "../CardFront/CardFront";

const CardList = ({beers}) => {
  return (
    <div className={styles.cardList}>
      <h3>CardList</h3>
      <div className={styles.cards}>
        <div>
          {beers.map((beers) => (
            <CardFront beers={beers} key={beers.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
