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
