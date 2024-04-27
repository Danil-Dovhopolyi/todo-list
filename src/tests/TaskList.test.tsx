import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import TaskList from '../components/TaskList/TaskList';
import { Task } from '../types/types';
import { createTestStore } from './testUtils';

describe('TaskList Component', () => {
  const tasks: Task[] = [
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: true },
  ];

  const testCases = [
    {
      label: 'non-deleted',
      showDeleted: false,
      initialState: { allTasks: tasks, deletedTasks: [] },
    },
    { label: 'deleted', showDeleted: true, initialState: { allTasks: [], deletedTasks: tasks } },
  ];

  testCases.forEach(({ label, showDeleted, initialState }) => {
    it(`renders ${label} tasks correctly when showDeleted is ${showDeleted}`, () => {
      const { store } = createTestStore({ tasks: initialState });

      const { getAllByText } = render(
        <Provider store={store}>
          <TaskList showDeleted={showDeleted} />
        </Provider>,
      );

      const expectedTasks = showDeleted ? initialState.deletedTasks : initialState.allTasks;

      expectedTasks.forEach((task) => {
        const taskElements = getAllByText(task.title);
        expect(taskElements).toHaveLength(1);
      });
    });
  });
});
