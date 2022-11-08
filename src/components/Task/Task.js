import React from "react";
import styles from "./task.module.scss";

function Task(props) {
  const { task } = props;
  return (
    <div className={styles.container}>
      <p>{task.title}</p>
    </div>
  );
}

export default Task;
