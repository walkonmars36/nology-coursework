import React from "react";
import styles from "./Employee.module.scss";

const Employee = (props) => {
  const {img, name, role} = props.teamMember;

  return (
    <div className={styles.employeeCard}>
      <div className={styles.employeeDetails}>
        <img src={img} alt="profile img" />
        <h2>{name}</h2>
        <h3>{role}</h3>
      </div>
    </div>
  );
};

export default Employee;
