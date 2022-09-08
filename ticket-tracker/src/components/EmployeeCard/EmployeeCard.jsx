import React from "react";
import Employee from "../Employee";
import Counter from "../Counter";
import styles from "./EmployeeCard.module.scss";

const EmployeeCard = (props) => {
  const {teamMember} = props;
  return (
    <section className={styles.employeeCard}>
      <Employee teamMember={teamMember} />
      <Counter />
    </section>
  );
};

export default EmployeeCard;
