import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList/CardList";

const Main = () => {
  return (
    <div className={styles.main}>
      <h2>Main section</h2>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default Main;
