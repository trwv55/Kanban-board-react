import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../config';
import SubmitForm from './SubmitForm';
import SelectForm from './SelectForm';
import { TasksType } from '../App';


type CardProps = {
  title: string
  tasks: TasksType[]
  addNewTask: (title: string, description: string) => void
  type: string
  initTasks: TasksType[]
  setTasks: any
}

const Card: React.FC<CardProps> = ({ title, tasks, addNewTask, type, initTasks, setTasks }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleClick = () => {
    setIsFormVisible(!isFormVisible);
    setIsButtonVisible(!isButtonVisible);
  };

  return (
    <div className='card'>
      <h2 className='card__title'>{title}</h2>
      {tasks.map((task) => {
        return (
          <Link to={`/tasks/${task.id}`} key={task.id}>
            <div className='card__task'>{task.title}</div>
          </Link>
        );
      })}

      {type === LIST_TYPES.BACKLOG && isFormVisible && (
        <SubmitForm
          addNewTask={addNewTask}
          isFormVisible={isFormVisible}
          setIsFormVisible={setIsFormVisible}
          setIsButtonVisible={setIsButtonVisible}
        />
      )}

      {type === LIST_TYPES.READY && isFormVisible && (
        <SelectForm
          initTasks={initTasks}
          type={type}
          setIsFormVisible={setIsFormVisible}
          setTasks={setTasks}
          setIsButtonVisible={setIsButtonVisible}
        />
      )}

      {type === LIST_TYPES.IN_PROGRESS && isFormVisible && (
        <SelectForm
          initTasks={initTasks}
          type={type}
          setIsFormVisible={setIsFormVisible}
          setTasks={setTasks}
          setIsButtonVisible={setIsButtonVisible}
        />
      )}

      {type === LIST_TYPES.DONE && isFormVisible && (
        <SelectForm
          initTasks={initTasks}
          type={type}
          setIsFormVisible={setIsFormVisible}
          setTasks={setTasks}
          setIsButtonVisible={setIsButtonVisible}
        />
      )}
      <button onClick={handleClick} className='button'>
        {isButtonVisible && '+ Add card'}
      </button>
    </div>
  );
}

export default Card;
