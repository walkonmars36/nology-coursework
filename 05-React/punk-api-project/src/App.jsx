import {useState, useEffect} from "react";
import axios from "axios";
import styles from "./App.module.scss";

import NavBar from "./containers/NavBar";
import Main from "./containers/Main";

function App() {
  const API_URL = "https://api.punkapi.com/v2/beers/";

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setBeers(res.data))

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBeers = beers.filter((beer) => {
    return beer.name.includes(searchTerm);
  });

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <NavBar onSearch={handleInputChange} val={searchTerm} />
        <Main beers={filteredBeers} />
      </div>
    </div>
  );
}

export default App;

// map helper function option
// const getBeers = (beers) => <Main beer={beers}/>
// in jsx
// {beers.map(getBeers)}
