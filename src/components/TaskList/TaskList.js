import Status from "components/Status/Status";
import Task from "components/Task/Task";
import { TaskContext } from "context/TaskContextProvider";
import { TaskFormContext } from "context/TaskFormContextProvider";
import React, { useContext, useState } from "react";
import { updateOrCreateTask } from "utils/appUtils";
import styles from "./tasklist.module.scss";

function TaskList({ status }) {
  const { setIsModalOpen, tasks: tasklist } = useContext(TaskContext);
  const { setInitialValues } = useContext(TaskFormContext);
  const [droppable, setDroppable] = useState(false);

  const handleClick = () => {
    setInitialValues({
      status: status.id
    });
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const handleDragOver = (event) => {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      setDroppable(true);
    }
  };

  const handleDragLeave = () => {
    setDroppable(false);
  };

  const handleOnDrop = async (event) => {
    const taskId = event.dataTransfer.getData("text/plain");
    const droppedTask = tasklist.find((task) => task.id === taskId);
    setDroppable(false);
    if (droppedTask.status !== status.id) {
      await updateOrCreateTask(
        {
          status: status.id
        },
        droppedTask
      );
    }
    window.dispatchEvent(new Event("storage"));
  };

  const filteredTasks = tasklist?.filter((task) => task.status === status.id);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Status status={status} count={filteredTasks?.length} />
        <span className={styles.addIcon} onClick={handleClick}>
          +
        </span>
      </div>
      <div
        className={`${styles.tasks} ${droppable ? styles.droppable : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleOnDrop}
      >
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
