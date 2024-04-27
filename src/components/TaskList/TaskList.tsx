import React from 'react';
import { useSelector } from 'react-redux';
import { TasksState } from '../../types/types';
import './TaskListStyles.scss';
import ActiveTaskItem from '../TaskItem/ActiveTaskItem';
import DeletedTaskItem from '../DeletedTaskItem/DeletedTaskItem';

interface TaskListProps {
  showDeleted: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ showDeleted }) => {
  const { allTasks, deletedTasks } = useSelector((state: { tasks: TasksState }) => state.tasks);
  const tasks = showDeleted ? deletedTasks : allTasks;
  const taskListClass = showDeleted ? 'task-list ' : 'task-list no-top-padding';
  const TaskComponent = showDeleted ? DeletedTaskItem : ActiveTaskItem;
  return (
    <div className={taskListClass}>
      {tasks.map((task) => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
