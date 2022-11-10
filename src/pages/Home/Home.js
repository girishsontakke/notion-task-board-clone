import React, { useContext } from "react";
import styles from "./Home.module.scss";
import TaskList from "components/TaskList/TaskList";
import TaskForm from "components/TaskForm/TaskForm";
import { Modal } from "antd";
import { TaskContext } from "context/TaskContextProvider";
import statuslist from "data/status";

function Home() {
  const { isModalOpen, setIsModalOpen } = useContext(TaskContext);
  const handleOnCancel = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <main className={styles.home}>
      <h1 className={styles.heading}>
        <span role="img">✔️</span> Task List
      </h1>

      <div className={styles.taskscontainer}>
        {statuslist.map((status) => (
          <TaskList key={status.id} status={status} />
        ))}
      </div>

      <Modal
        open={isModalOpen}
        title="Task"
        onCancel={handleOnCancel}
        footer={null}
        width="50%"
      >
        <TaskForm />
      </Modal>
    </main>
  );
}

export default Home;
