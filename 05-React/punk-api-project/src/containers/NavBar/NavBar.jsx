import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../../components/FilterList/FilterList";

const NavBar = ({val, onSearch}) => {
  return (
    <div className={styles.nav}>
      <div>
        <SearchBox val={val} onSearch={onSearch} />
        <FilterList />
      </div>
    </div>
  );
};

export default NavBar;
