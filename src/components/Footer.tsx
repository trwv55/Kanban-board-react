import React from 'react';
import { TasksType } from '../App';
import { LIST_TYPES } from '../config';


type FooterProps = { tasks: TasksType[] }

const Footer: React.FC<FooterProps> = ({ tasks }) => {
  const backlogTasks = tasks.filter((task) => task.status === LIST_TYPES.BACKLOG);
  const doneTasks = tasks.filter((task) => task.status === LIST_TYPES.DONE);

  return (
    <div className="footer">
      <div className="task-wrapper">
        <p>Backlog: {backlogTasks.length} </p>
        <p>|</p>
        <p>Done: {doneTasks.length}</p>
      </div>
      <div className="name">
        Created by:{' '}
        <a href="https://github.com/trwv55" target="_blank" rel="noreferrer">
          @trwv55
        </a>
      </div>
    </div>
  );
}

export default Footer;
