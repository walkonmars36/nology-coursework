import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = ({val, onSearch}) => {
  return (
    <div className={styles.search}>
      <input type="text" value={val} onChange={onSearch} placeholder="search beers" />
    </div>
  );
};

export default SearchBox;
