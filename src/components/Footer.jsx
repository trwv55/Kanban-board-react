import React from 'react';
import { LIST_TYPES } from '../config';

function Footer(props) {
  const { tasks } = props;
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
