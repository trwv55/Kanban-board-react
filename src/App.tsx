import React, { useState, useEffect } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import mock from './mock.json';

function App() {
  const initialState = mock;
  // JSON.parse(window.localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState<{
    id: string
    title: string
    description: string
    created: string
    status: string
  }[]>(initialState);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='app-wrapper'>
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
