import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";

const CardList = ({beers}) => {
  return (
    <div className={styles.cardList}>
      <h3>CardList</h3>
      <div className={styles.cards}>
        <div>
          {beers.map((beers) => (
            <Card beers={beers} key={beers.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
