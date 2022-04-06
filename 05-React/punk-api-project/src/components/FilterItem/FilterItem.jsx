import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = () => {
  return (
    <div className={styles.filterItem}>
      <h4>Filter Item</h4>
      <form action="">
        <div>
          <label htmlFor="High_ABV">
            High ABV <input type="checkbox" name="" id="" />
          </label>
        </div>
        <div>
          <label htmlFor="Classic_Range">
            Classic Range
            <input type="checkbox" name="" id="" />
          </label>
        </div>
        <div>
          <label htmlFor="Acidity">
            Acidity <input type="checkbox" name="" id="" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default FilterItem;
