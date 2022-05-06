import React from "react";
import styles from "./FilterList.module.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = ({filterItems}) => {
  return (
    <div className={styles.filterList}>
      {filterItems.map((filterObject) => (
        <FilterItem alcoholRange={filterObject.name} filteredAlcohol={filterObject.filteredAlcohol} />
      ))}
    </div>
  );
};

export default FilterList;
