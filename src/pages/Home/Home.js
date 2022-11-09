import React, { useContext } from "react";
import styles from "./Home.module.scss";
import tasklist from "data/tasklist";
import TaskList from "components/TaskList/TaskList";
import TaskForm from "components/TaskForm/TaskForm";
import { Modal } from "antd";
import { TaskContext } from "context/TaskContextProvider";

function Home() {
  const { isModalOpen, setIsModalOpen } = useContext(TaskContext);
  const handleOnCancel = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <main className={styles.home}>
      <h1 className={styles.heading}>✔️ Task List</h1>

      <div className={styles.taskscontainer}>
        <TaskList tasklist={tasklist} />
        <TaskList tasklist={tasklist} />
        <TaskList tasklist={tasklist} />
      </div>

      <Modal
        open={isModalOpen}
        title="Task"
        onCancel={handleOnCancel}
        footer={null}
      >
        <TaskForm />
      </Modal>
    </main>
  );
}

export default Home;
