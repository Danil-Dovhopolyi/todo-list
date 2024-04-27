import React, { Fragment } from 'react';
import TaskList from '../../components/TaskList/TaskList';

const DeletedTasks: React.FC = () => {
  return (
    <Fragment>
      <TaskList showDeleted={true} />
    </Fragment>
  );
};

export default DeletedTasks;
