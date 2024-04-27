import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksState } from '../../types/types';
const exampleTask: Task = {
  id: '1',
  title: 'Example Task',
  completed: false,
};
const initialState: TasksState = {
  allTasks: [exampleTask],
  deletedTasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.allTasks.push(action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.allTasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const deletedTask = state.allTasks.find((t) => t.id === action.payload);
      if (deletedTask) {
        state.deletedTasks.push(deletedTask);
        state.allTasks = state.allTasks.filter((t) => t.id !== action.payload);
      }
    },
    restoreTask: (state, action: PayloadAction<Task>) => {
      state.allTasks.push(action.payload);
      state.deletedTasks = state.deletedTasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { addTask, toggleTask, deleteTask, restoreTask } = taskSlice.actions;
export default taskSlice.reducer;
