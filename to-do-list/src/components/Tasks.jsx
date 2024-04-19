import React, { useContext } from 'react';
import Task from './Task';
import TaskContext from '../context/TaskContext';

const Tasks = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className='tasks'>
      <div className='task-section'>
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
