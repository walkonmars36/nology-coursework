import {useState, useEffect} from "react";

import axios from "axios";
import styles from "./App.module.scss";

import NavBar from "./containers/NavBar";
import Main from "./containers/Main";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abvOver6, setAbvOver6] = useState([]);

  // Initial api call sets all beers to initial state - beers

  const API_URL = "https://api.punkapi.com/v2/beers/";

  const getBeers = () => {
    axios
      .get(API_URL)
      .then((res) => setBeers(res.data))

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBeers();
  }, []);

  ////// Api call for high abv > 6

  const API_GT_6 = "https://api.punkapi.com/v2/beers?abv_gt=6";

  ////// Search
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchBeers = beers.filter((beer) => beer.name.toLowerCase().includes(searchTerm));

  ///// End search

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <NavBar onSearch={handleInputChange} val={searchTerm} />
        <Main beers={searchBeers} />
      </div>
    </div>
  );
}

export default App;

// map helper function option
// const getBeers = (beers) => <Main beer={beers}/>
// in jsx
// {beers.map(getBeers)}
