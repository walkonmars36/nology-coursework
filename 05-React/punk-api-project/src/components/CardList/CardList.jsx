import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className={styles.cardList}>
      <h3>CardList</h3>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default CardList;
