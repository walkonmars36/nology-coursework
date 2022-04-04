import React from "react";
import styles from "./FilterList.module.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = () => {
  return (
    <div className={styles.filterList}>
      <h3>FilterList</h3>
      <div>
        <FilterItem />
      </div>
    </div>
  );
};

export default FilterList;
