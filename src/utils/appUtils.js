export const updateOrCreateTask = async (values, initialValues = {}) => {
  let tasks = (await JSON.parse(localStorage.getItem("tasks"))) || [];
  if (initialValues.id) {
    tasks = tasks.map((task) =>
      task.id === initialValues.id
        ? {
            ...task,
            ...values
          }
        : task
    );
  } else {
    tasks.push({
      ...values,
      id: new Date().toISOString()
    });
  }

  localStorage.removeItem("tasks");
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const deleteTask = async (taskToDelete) => {
  let tasks = (await JSON.parse(localStorage.getItem("tasks"))) || [];
  tasks = tasks.filter((task) => task.id !== taskToDelete.id);

  localStorage.removeItem("tasks");
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
