import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TasksType } from '../App';

import Board from './Board';
import TaskDetail from './TaskDetail';


type MainProps = {
  tasks: TasksType[]
  setTasks: React.Dispatch<React.SetStateAction<TasksType[]>> 
}


const Main: React.FC<MainProps> = (props) => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Board {...props} />} />
        <Route path='/tasks/:taskId' element={<TaskDetail {...props} />} />
      </Routes>
    </div>
  );
}

export default Main;
