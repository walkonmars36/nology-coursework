import {useState, useEffect} from "react";

import axios from "axios";
import styles from "./App.module.scss";

import NavBar from "./containers/NavBar";
import Main from "./containers/Main";

function App() {
  const [beers, setBeers] = useState([]);

  const [filteredBeers, setFilteredBeers] = useState([]);

  // Initial api call sets all beers to initial state - beers

  const API_URL = "https://api.punkapi.com/v2/beers?page=2&per_page=80";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setBeers(res.data))

      .catch((err) => {
        console.log(err);
      });
  }, []);

  /// useEffect to mount setfilteredBeers
  useEffect(() => {
    setFilteredBeers(beers);
  }, [beers]);

  //// HIGH ABV
  const highABV = (event) => {
    if (event.target.checked) {
      const filteredHigh = beers.filter((beer) => beer.abv > 6);
      setFilteredBeers(filteredHigh);
    } else {
      setFilteredBeers(beers);
    }
  };

  /// CLASSIC RANGE
  const classicRange = (event) => {
    if (event.target.checked) {
      const filteredClassic = beers.filter((beer) => beer.first_brewed.split("/")[1] <= 2010);
      setFilteredBeers(filteredClassic);
    } else {
      setFilteredBeers(beers);
    }
  };

  //// ACIDIC
  const acidicPH = (event) => {
    if (event.target.value) {
      const filteredAcidic = beers.filter((beer) => beer.ph < 4);
      setFilteredBeers(filteredAcidic);
    } else {
      setFilteredBeers(beers);
    }
  };

  ////// Search
  const searchFilter = (event) => {
    if (event.target.value) {
      const searchBeers = beers.filter((beer) => beer.name.toLowerCase().includes(event.target.value));
      setFilteredBeers(searchBeers);
    } else {
      setFilteredBeers(beers);
    }
  };

  ///// End search

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <NavBar
          searchFilter={searchFilter}
          filterItems={[
            {name: "High ABV (>6.0%)", filteredAlcohol: (event) => highABV(event)},
            {name: "Classic Range", filteredAlcohol: (event) => classicRange(event)},
            {name: "Acidic (ph < 4)", filteredAlcohol: (event) => acidicPH(event)},
          ]}
        />

        <Main beers={filteredBeers} />
      </div>
    </div>
  );
}

export default App;

// lastBeers={lastBeers} nextBeers={nextBeers}

// map helper function option
// const getBeers = (beers) => <Main beer={beers}/>
// in jsx
// {beers.map(getBeers)}
