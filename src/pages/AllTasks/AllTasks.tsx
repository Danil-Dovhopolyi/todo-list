import React, { Fragment } from 'react';
import TaskList from '../../components/TaskList/TaskList';
import AddTask from '../../components/AddTask/AddTask';

const AllTasks: React.FC = () => {
  return (
    <Fragment>
      <AddTask />
      <TaskList showDeleted={false} />
    </Fragment>
  );
};

export default AllTasks;
