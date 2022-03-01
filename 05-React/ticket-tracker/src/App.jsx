import React from "react";
import team from "./data";
import styles from "./App.module.scss";
import Employee from "./components/Employee";

const App = () => {
  const getEmployee = (teamMember) => (
    <div key={teamMember.id}>
      <Employee teamMember={teamMember} />
    </div>
  );

  return (
    <>
      <section className={styles.content}>{team.map(getEmployee)}</section>
    </>
  );
};

export default App;

// 1. Change title in public/index.hmtl
// 2. Rename src/App.js -> App.jsx
// 3. Clear out code from return in App.jsx
// 4. Clear out code from App.css
// 5. Add global reset to index.css
// 6. Install sass
// 7. Rename App.css -> App.module.scss and change import
