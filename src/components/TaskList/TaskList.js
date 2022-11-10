import Status from "components/Status/Status";
import Task from "components/Task/Task";
import { TaskContext } from "context/TaskContextProvider";
import { TaskFormContext } from "context/TaskFormContextProvider";
import React, { useContext } from "react";
import styles from "./tasklist.module.scss";

function TaskList({ status }) {
  const { setIsModalOpen, tasks: tasklist } = useContext(TaskContext);
  const { setInitialValues } = useContext(TaskFormContext);

  const handleClick = () => {
    setInitialValues({
      status: status.id
    });
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const filteredTasks = tasklist?.filter((task) => task.status === status.id);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Status status={status} />
        <span className={styles.addIcon} onClick={handleClick}>
          +
        </span>
      </div>
      <div className={styles.tasks}>
        {filteredTasks?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <div className={styles.newTask} onClick={handleClick}>
          <span className={styles.icon}>+</span> New
        </div>
      </div>
    </div>
  );
}

export default TaskList;
