import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={styles.App}>
      <div>
        <NavBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
