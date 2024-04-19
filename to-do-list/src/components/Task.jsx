import React, { useContext, useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiSolidEditAlt } from 'react-icons/bi';
import TaskContext from '../context/TaskContext';
import { TiTick } from 'react-icons/ti';
import { TiCancel } from 'react-icons/ti';

const Task = ({ task }) => {
  const [newTask, setNewTask] = useState(task.task);
  const [edit, setEdit] = useState(false);
  const { editTask, deleteTask } = useContext(TaskContext);

  const editTasks = () => {
    editTask(task.id, newTask);
    setEdit(false);
  };

  const deleteTasks = (e) => {
    e.preventDefault();
    deleteTask(task.id);
  };

  return (
    <div className='task'>
      <div className='inside-task'>
        {edit ? (
          <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        ) : (
          <div>{task.task}</div>
        )}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {edit ? (
            <button
              className='add-task-btn'
              style={{ padding: '15%' }}
              onClick={editTasks}
            >
              <TiTick />
            </button>
          ) : (
            <button className='edit-btn' onClick={() => setEdit(true)}>
              <BiSolidEditAlt />
            </button>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {edit ? (
            <button className='delete-btn' onClick={() => setEdit(false)}>
              <TiCancel />
            </button>
          ) : (
            <button className='delete-btn' onClick={deleteTasks}>
              <RiDeleteBin6Line />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
