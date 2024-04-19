import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import { v4 as uuid } from 'uuid';

const AddTask = () => {
  const [task, setTask] = useState('');

  const { addTask } = useContext(TaskContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    e.target.reset();
    addTask({ id: uuid(), task: task });
  };

  return (
    <div className='entire-section'>
      <form className='container' onSubmit={handleAddTask}>
        <label htmlFor='add-task'>Add Task</label>
        <input
          type='text'
          id='add-task'
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit' className='add-task-btn'>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
