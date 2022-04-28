import React from "react";
import styles from "./FilterList.module.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = ({}) => {
  return (
    <div className={styles.filterList}>
      <h3>FilterList</h3>
      <form>
        <FilterItem id="0" title="High ABV" value="High ABV" label="High ABV" />

        <FilterItem id="0" title="Classic Range" value="Classic Range" label="Classic Range" />

        <FilterItem id="0" title="Acidic ph < 4" value="Acidic ph < 4" label="Acidic ph < 4" />
      </form>
    </div>
  );
};

export default FilterList;
