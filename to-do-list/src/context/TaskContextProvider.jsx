import React from 'react';
import TaskContext from './TaskContext';

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, task) => {
    setTasks([
      ...tasks.filter((task) => task.id !== id),
      { id: id, task: task },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, editTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
