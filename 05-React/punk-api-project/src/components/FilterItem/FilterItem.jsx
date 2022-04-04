import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = () => {
  return (
    <div className={styles.filterItem}>
      <h4>Filter Item</h4>
      <ul>
        <li>High ABV</li>
        <li>Classic Range</li>
        <li>Acidity</li>
      </ul>
    </div>
  );
};

export default FilterItem;
