import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TasksType } from '../App';
import { LIST_COPY } from '../config';

type TaskDetailProps = {
  tasks: TasksType[]
  setTasks: React.Dispatch<React.SetStateAction<TasksType[]>> 
}

const TaskDetail: React.FC<TaskDetailProps> = ({ tasks, setTasks }) => {
  const { taskId } = useParams();
  const [updatedItem, setUpdatedItem] = useState<string | null>(null);

  const task = tasks.find((task) => task.id === taskId);
  const mock = 'This task has no description';

  const formatDate = (stringDate: string | number | Date) => {
    const date = new Date(stringDate);
    return date.toLocaleString('ru-RU');
  };

  const isCurrentBeingUpdated = updatedItem;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === task?.id ? { ...item, description: e.target.value } : item,
      ),
    );
  };

  const renderTitleOrInput = () => {
    return isCurrentBeingUpdated ? (
      <input className="input" value={task?.description} onChange={handleInputChange} />
    ) : (
      task?.description
    );
  };

  return (
    <div className="wrapper">
      {task ? (
        <>
          <div className="header">
            <h2>{task.title}</h2>
            <Link to={'/'}>
              <div>&#10005;</div>
            </Link>
          </div>
          <div className="description">
            <div className="parent">
              <p>{renderTitleOrInput() || mock}</p>
              <button onClick={() => setUpdatedItem(isCurrentBeingUpdated ? null : task.id)}>
                {isCurrentBeingUpdated ? 'Save' : 'Edit'}
              </button>
            </div>
            <div className="date">{formatDate(task.created)}</div>
            <div className="status">{LIST_COPY[task.status]}</div>
          </div>
        </>
      ) : (
        <div className="not-found">
          <h2>Task with ID {taskId} not found</h2>
          <Link to={'/'}>
            <div>&#10005;</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
