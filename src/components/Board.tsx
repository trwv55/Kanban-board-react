import React from 'react';
import { nanoid } from 'nanoid';
import { LIST_TYPES, LIST_COPY } from '../config';
import Card from './Card';
import { TasksType } from '../App';


type BoardProps = {
  tasks: TasksType[]
  setTasks: React.Dispatch<React.SetStateAction<TasksType[]>> 
}

const Board: React.FC<BoardProps> = ({ tasks, setTasks }) => {

  const addNewTask = (title: string, description: string) => {
    const newTask = {
      id: nanoid(),
      title: title,
      description: description,
      created: new Date().toISOString(),
      status: LIST_TYPES.BACKLOG,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className='board'>
      {Object.values(LIST_TYPES).map((type, i) => {
        const listTasks = tasks.filter((task) => task.status === type);
        console.log(listTasks)
        return (
          <Card
            key={i}
            title={LIST_COPY[type]}
            initTasks={tasks}
            setTasks={setTasks}
            tasks={listTasks}
            addNewTask={addNewTask}
            type={type}
          />
        );
      })}
    </div>
  );
}

export default Board;
