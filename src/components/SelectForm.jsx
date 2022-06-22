import React from 'react';
import { LIST_TYPES } from '../config';

const SelectForm = ({ type, setIsFormVisible, initTasks, setTasks}) => {
  
  const changeType = (type) => {
    switch (type) {
      case LIST_TYPES.READY:
        return initTasks.filter(task => task.status === LIST_TYPES.BACKLOG)
      case LIST_TYPES.IN_PROGRESS:
        return initTasks.filter(task => task.status === LIST_TYPES.READY)
      case LIST_TYPES.DONE:
        return initTasks.filter(task => task.status === LIST_TYPES.IN_PROGRESS)
      default:
        return []
    }
  } 

  // const changeType = type => {
  //   if(type === LIST_TYPES.READY) {
  //     return initTasks.filter(task => task.status === LIST_TYPES.BACKLOG)
  //   }
  //   else if (type === LIST_TYPES.IN_PROGRES) {
  //     return initTasks.filter(task => task.status === LIST_TYPES.READY)
  //   }
  //   else if (type === LIST_TYPES.DONE) {
  //     return initTasks.filter(task => task.status === LIST_TYPES.IN_PROGRES)
  //   }
  //   return []
    
  // }
    
  
  const typeTasks = changeType (type);

    const handleChange = e => {
      const newTitle = e.target.value;
      const updatedTask = initTasks.map(task => {
          if(task.title === newTitle) {
              return {...task, status: type}
          }
          return task;
      })
      setTasks(updatedTask);
      setIsFormVisible(false);
    }

  return (
      <select className='select' onChange={handleChange}>
        <option key=''  selected='false' value='' ></option>
          {typeTasks.map(task => {
            return (
             <option key={task.id} value={task.title}>{task.title}</option>
         )
     })}
      </select>
  )
}

export default SelectForm;
