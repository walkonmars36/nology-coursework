import React, {useState} from "react";
import styles from "./Counter.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

const plusSign = <FontAwesomeIcon icon={faPlus} />;
const minusSign = <FontAwesomeIcon icon={faMinus} />;

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className={styles.counterArea}>
      <h4>Tickets Completed</h4>
      <div className={styles.buttonArea}>
        <button onClick={decrementCount}>{minusSign}</button>
        <span>{count}</span>
        <button onClick={incrementCount}>{plusSign}</button>
      </div>
    </div>
  );
};

export default Counter;
