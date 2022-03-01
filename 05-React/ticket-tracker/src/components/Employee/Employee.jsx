import React, {useState} from "react";
import styles from "./Employee.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

const plusSign = <FontAwesomeIcon icon={faPlus} />;
const minusSign = <FontAwesomeIcon icon={faMinus} />;

const Employee = (props) => {
  const {img, name, role} = props.teamMember;

  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.employeeCard}>
      <div className={styles.employeeDetails}>
        <img src={img} alt="profile img" />
        <h2>{name}</h2>
        <h3>{role}</h3>
      </div>

      <div className={styles.counterArea}>
        <h4>Tickets Completed</h4>
        <div className={styles.buttonArea}>
          <button onClick={decrementCount}>{minusSign}</button>
          <span>{count}</span>
          <button onClick={incrementCount}>{plusSign}</button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
