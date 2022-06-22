import React from 'react';
import {  Link, useParams } from 'react-router-dom';
import { LIST_COPY } from '../config';

const TaskDetail = (props) => {
    const { tasks } = props;
    const { taskId } = useParams();

    const task = tasks.find(task => task.id === taskId)

    // const formatDate = (stringDate) => {
    //     const date = new Date(stringDate)
    //     return date.toLocaleString('ru-RU')
    // }
 
   
  return (
    <div className='wrapper'>
        {task ? (
            <>
            <div className='header'>
            <h2>{task.title}</h2>
            <Link to={'/'}>
            <div>&#10005;</div>
            </Link>
        </div>
        <div className='description'>
            <p>{task.description || 'This task has no description'}</p>
            <div className='status'>{LIST_COPY[task.status]}</div>
        </div>
        </> 
        ) : (
            <div className='not-found'>
            <h2>Task with ID {taskId} not found</h2>
            <Link to={'/'}>
            <div>&#10005;</div>
            </Link>
            </div>
            )}

        

    </div>
  )
}

export default TaskDetail;
