import { TaskContext } from "context/TaskContextProvider";
import { TaskFormContext } from "context/TaskFormContextProvider";
import React, { useContext } from "react";
import styles from "./task.module.scss";

function Task(props) {
  const { task } = props;
  const { setIsModalOpen } = useContext(TaskContext);
  const { setInitialValues } = useContext(TaskFormContext);

  const handleClick = () => {
    setIsModalOpen(true);
    setInitialValues(task);
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", task.id);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div
      className={styles.container}
      onClick={handleClick}
      onDragStart={handleDragStart}
      draggable={true}
    >
      <p>{task.title}</p>
    </div>
  );
}

export default Task;
