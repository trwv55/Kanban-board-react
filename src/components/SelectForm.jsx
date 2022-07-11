import React from 'react';
import { LIST_TYPES } from '../config';

const SelectForm = ({ type, setIsFormVisible, initTasks, setTasks, backlogTasks }) => {
  const changeType = (type) => {
    switch (type) {
      case LIST_TYPES.READY:
        return initTasks.filter((task) => task.status === LIST_TYPES.BACKLOG);
      case LIST_TYPES.IN_PROGRESS:
        return initTasks.filter((task) => task.status === LIST_TYPES.READY);
      case LIST_TYPES.DONE:
        return initTasks.filter((task) => task.status === LIST_TYPES.IN_PROGRESS);
      default:
        return [];
    }
  };

  const typeTasks = changeType(type);

  const handleChange = (e) => {
    const newTitle = e.target.value;
    const foundTask = initTasks.find((item) => item.title === newTitle);
    console.log(foundTask);
    foundTask.status = type;
    const updatedTasks = [...initTasks.filter((item) => item.title !== newTitle), foundTask];
    setTasks(updatedTasks);
    setIsFormVisible(false);
  };

  return (
    <select className="select" onChange={handleChange}>
      <option defaultValue={false} value=""></option>
      {typeTasks.map((task) => {
        return (
          <option key={task.id} value={task.title}>
            {task.title}
          </option>
        );
      })}
    </select>
  );
};

export default SelectForm;
