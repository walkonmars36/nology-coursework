import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = ({searchFilter}) => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="search beers" onChange={searchFilter} />
    </div>
  );
};

export default SearchBox;
