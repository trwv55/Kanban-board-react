import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../config';
import SubmitForm from './SubmitForm';
import SelectForm from './SelectForm';



function Card(props) {
    const { title, tasks, addNewTask, type, initTasks, setTasks } = props;
    const [ isFormVisible, setIsFormVisible ] = useState(false);

    const handleClick = () => {
        setIsFormVisible(!isFormVisible)
    }

    const ButtonAdd = (
        <button onClick={handleClick} className='button'>+ Add card</button>
    )
 
    return (
        <div className='card'>
            <h2 className='card__title'>{title}</h2>
            {tasks.map(task => {
                return (
                    <Link to={`/tasks/${task.id}`}>
                        <div className='card__task' key={task.id}>{task.title}</div>
                    </Link>        
                )
            })}
            
            {type === LIST_TYPES.BACKLOG && isFormVisible ?
            <SubmitForm addNewTask={addNewTask} setIsFormVisible={setIsFormVisible}    /> : type === LIST_TYPES.BACKLOG && ButtonAdd
            }

            {type === LIST_TYPES.READY  && isFormVisible ?
            <SelectForm initTasks={initTasks} type={type} setIsFormVisible={setIsFormVisible} setTasks={setTasks} /> : type === LIST_TYPES.READY && ButtonAdd }

            {type === LIST_TYPES.IN_PROGRESS  && isFormVisible ?
            <SelectForm initTasks={initTasks} type={type} setIsFormVisible={setIsFormVisible} setTasks={setTasks} /> : type === LIST_TYPES.IN_PROGRESS && ButtonAdd}
            
            {type === LIST_TYPES.DONE  && isFormVisible ?
            <SelectForm initTasks={initTasks} type={type} setIsFormVisible={setIsFormVisible} setTasks={setTasks} /> : type === LIST_TYPES.DONE && ButtonAdd}
            
        </div>
    )
}

export default Card;