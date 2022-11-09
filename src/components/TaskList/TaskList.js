import Status from "components/Status/Status";
import Task from "components/Task/Task";
import { TaskContext } from "context/TaskContextProvider";
import React, { useContext } from "react";
import styles from "./tasklist.module.scss";

function TaskList({ tasklist }) {
  const { setIsModalOpen } = useContext(TaskContext);

  const handleClick = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Status status={tasklist[0].status} />
        <span className={styles.addIcon} onClick={handleClick}>
          +
        </span>
      </div>
      <div className={styles.tasks}>
        {tasklist.map((task) => (
          <Task task={task} />
        ))}
        <div className={styles.newTask} onClick={handleClick}>
          <span className={styles.icon}>+</span> New
        </div>
      </div>
    </div>
  );
}

export default TaskList;
