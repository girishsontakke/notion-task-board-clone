import React, { useState } from "react";

export const TaskFormContext = React.createContext();

function TaskFormContextProvider({ children }) {
  const [initialValues, setInitialValues] = useState(null);

  const values = {
    initialValues,
    setInitialValues
  };
  return (
    <TaskFormContext.Provider value={values}>
      {children}
    </TaskFormContext.Provider>
  );
}

export default TaskFormContextProvider;
