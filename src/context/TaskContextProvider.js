import React, { useState } from "react";

export const TaskContext = React.createContext();

function TaskContextProvider(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const value = {
    isModalOpen,
    setIsModalOpen
  };
  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
}

export default TaskContextProvider;
