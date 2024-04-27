import taskReducer, {
  addTask,
  toggleTask,
  deleteTask,
  restoreTask,
} from '../redux/reducers/taskReducer';
import { Task } from '../types/types';

describe('taskReducer', () => {
  const initialState = {
    allTasks: [],
    deletedTasks: [],
  };

  const task: Task = {
    id: '1',
    title: 'Test Task',
    completed: false,
  };

  it('should add a new task', () => {
    const newState = taskReducer(initialState, addTask(task));
    expect(newState.allTasks).toContainEqual(task);
  });

  it('should toggle task completion', () => {
    const newState = taskReducer({ ...initialState, allTasks: [task] }, toggleTask(task.id));
    expect(newState.allTasks[0].completed).toBe(true);
  });

  it('should delete a task and move it to deletedTasks', () => {
    const newState = taskReducer({ ...initialState, allTasks: [task] }, deleteTask(task.id));
    expect(newState.allTasks).toHaveLength(0);
    expect(newState.deletedTasks).toContainEqual(task);
  });

  it('should restore a deleted task', () => {
    const newState = taskReducer({ ...initialState, deletedTasks: [task] }, restoreTask(task));
    expect(newState.allTasks).toContainEqual(task);
    expect(newState.deletedTasks).toHaveLength(0);
  });
});
