import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../config';
import SubmitForm from './SubmitForm';
import SelectForm from './SelectForm';

function Card(props) {
  const { title, tasks, addNewTask, type, initTasks, setTasks } = props;
  console.log('type', type);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const backlogTasks = initTasks.filter((task) => task.status === LIST_TYPES.BACKLOG);

  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      {tasks.map((task) => {
        return (
          <Link to={`/tasks/${task.id}`} key={task.id}>
            <div className="card__task" key={task.id}>
              {task.title}
            </div>
          </Link>
        );
      })}

      {type === LIST_TYPES.BACKLOG && isFormVisible && (
        <SubmitForm addNewTask={addNewTask} setIsFormVisible={setIsFormVisible} />
      )}

      {type === LIST_TYPES.READY && isFormVisible && (
        <SelectForm
          initTasks={initTasks}
          type={type}
          setIsFormVisible={setIsFormVisible}
          setTasks={setTasks}
        />
      )}

      {type === LIST_TYPES.IN_PROGRESS && isFormVisible && (
        <SelectForm
          initTasks={initTasks}
          type={type}
          setIsFormVisible={setIsFormVisible}
          setTasks={setTasks}
        />
      )}

      {type === LIST_TYPES.DONE && isFormVisible && (
        <SelectForm
          initTasks={initTasks}
          type={type}
          setIsFormVisible={setIsFormVisible}
          setTasks={setTasks}
        />
      )}
      <button onClick={handleClick} className={isFormVisible ? 'button__submit' : 'button'}>
        {isFormVisible ? 'Submit' : '+ Add card'}
      </button>
    </div>
  );
}

export default Card;
