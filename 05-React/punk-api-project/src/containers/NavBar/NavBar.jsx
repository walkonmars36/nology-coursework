import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../../components/FilterList/FilterList";

const NavBar = ({filterItems, searchFilter}) => {
  return (
    <div className={styles.nav}>
      <div>
        <FilterList filterItems={filterItems} />
      </div>
      <div>
        <SearchBox searchFilter={searchFilter} />
      </div>
    </div>
  );
};

export default NavBar;
