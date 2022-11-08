import React from "react";
import styles from "./Home.module.scss";
import tasklist from "data/tasklist";
import TaskList from "components/TaskList/TaskList";

function Home() {
  return (
    <main className={styles.home}>
      <h1 className={styles.heading}>✔️ Task List</h1>

      <div className={styles.taskscontainer}>
        <TaskList tasklist={tasklist} />
        <TaskList tasklist={tasklist} />
        <TaskList tasklist={tasklist} />
      </div>
    </main>
  );
}

export default Home;
