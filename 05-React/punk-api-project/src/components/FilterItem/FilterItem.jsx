import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = ({alcoholRange, filteredAlcohol}) => {
  return (
    <div className={styles.filterItem}>
      {alcoholRange}
      <input type="checkbox" onChange={filteredAlcohol} />
    </div>
  );
};

export default FilterItem;
