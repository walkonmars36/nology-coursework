import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = ({isChecked, label, checkHandler, index, filteredBy}) => {
  return (
    <div className={styles.filterItem}>
      <input type="checkbox" id={`checkbox-${index}`} checked={isChecked} onChange={checkHandler} />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  );
};

export default FilterItem;
