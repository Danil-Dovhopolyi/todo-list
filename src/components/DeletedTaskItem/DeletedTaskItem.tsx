import React from 'react';
import { useDispatch } from 'react-redux';
import { restoreTask } from '../../redux/reducers/taskReducer';
import { Task } from '../../types/types';
import '../TaskItem/TaskItemStyles.scss';

const DeletedTaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();

  const handleRestoreTask = () => {
    dispatch(restoreTask(task));
  };

  return (
    <div className='task-item'>
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      <button className='button-restore' onClick={handleRestoreTask}>
        Restore
      </button>
    </div>
  );
};

export default DeletedTaskItem;
