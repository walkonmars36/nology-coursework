import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = ({id, title, value, label}) => {
  return (
    <div className={styles.filterItem}>
      <span>{label}</span>
      <input type="checkbox" id={id} title={title} value={value} />
    </div>
  );
};

export default FilterItem;
