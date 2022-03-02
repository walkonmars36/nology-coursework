import React from "react";

import Counter from "../Counter";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <section className={styles.card}>
      <div>
        <Counter />
      </div>
    </section>
  );
};

export default Card;
