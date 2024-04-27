import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import AddTask from '../components/AddTask/AddTask';

describe('AddTask Component', () => {
  test('handles null or undefined input gracefully', async () => {
    render(
      <Provider store={store}>
        <AddTask />
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Enter a new task');
    const button = screen.getByRole('button', { name: 'Add Task' });

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    expect(await screen.findByText('Title is required')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: undefined } });
    fireEvent.click(button);
    expect(await screen.findByText('Title is required')).toBeInTheDocument();
  });
});
