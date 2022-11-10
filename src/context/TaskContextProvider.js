import React, { useEffect, useState } from "react";

export const TaskContext = React.createContext();

function TaskContextProvider(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleStorage = async () => {
    const taskList = (await JSON.parse(localStorage.getItem("tasks"))) || [];
    setTasks(taskList);
  };

  useEffect(() => {
    handleStorage();
    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const value = {
    isModalOpen,
    setIsModalOpen,
    tasks,
    setTasks
  };
  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
}

export default TaskContextProvider;
