import React from "react";

import styles from "./Main.module.scss";
import CardList from "../../components/CardList/CardList";

const Main = ({beers}) => {
  return (
    <div className={styles.main}>
      <div>
        <CardList beers={beers} />
      </div>
    </div>
  );
};

export default Main;
