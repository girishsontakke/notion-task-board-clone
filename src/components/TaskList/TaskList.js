import Status from "components/Status/Status";
import Task from "components/Task/Task";
import React from "react";
import styles from "./tasklist.module.scss";

function TaskList({ tasklist }) {
  return (
    <div className={styles.container}>
      <Status status={tasklist[0].status} />
      {tasklist.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
}

export default TaskList;
