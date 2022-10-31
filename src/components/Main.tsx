import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Board from './Board';
import TaskDetail from './TaskDetail';

const Main: React.FC = (props) => {
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
