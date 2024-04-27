import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../redux/reducers/taskReducer';
import { Task } from '../../types/types';
import './TaskItemStyles.scss';

const ActiveTaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className='task-item'>
      <input type='checkbox' checked={task.completed} onChange={handleToggleTask} />
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      <button className='button-delete' onClick={handleDeleteTask}>
        Delete
      </button>
    </div>
  );
};

export default ActiveTaskItem;
