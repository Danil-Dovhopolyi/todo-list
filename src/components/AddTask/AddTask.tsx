import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/reducers/taskReducer';
import { v4 as uuidv4 } from 'uuid';
import './AddTaskStyles.scss';
import { useForm } from 'react-hook-form';

interface FormData {
  title: string;
}

const AddTask: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: '',
    },
  });

  const onSubmit = (data: FormData) => {
    const newTask = {
      id: uuidv4(),
      title: data.title.trim(),
      completed: false,
    };
    dispatch(addTask(newTask));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='add-task-form'>
      <div className='add-task-block'>
        <input
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters long',
            },
          })}
          type='text'
          placeholder='Enter a new task'
          className={errors.title ? 'is-invalid' : ''}
        />
        {errors.title && <span>{errors.title.message}</span>}
      </div>
      <div className='submit-block'>
        <button className='submit' type='submit'>
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
