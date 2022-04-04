import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <h2>I Am The NavBar</h2>
      <div>
        <SearchBox />
        <FilterList />
      </div>
    </div>
  );
};

export default NavBar;
