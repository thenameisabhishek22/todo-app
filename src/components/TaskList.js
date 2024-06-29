import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index) => {
    const updatedTask = prompt('Edit Task', tasks[index]);
    if (updatedTask !== null && updatedTask.trim() !== '') {
      dispatch(editTask(index, updatedTask));
    }
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => handleEditTask(index)}>Edit</button>
          <button onClick={() => handleDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
