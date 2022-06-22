import React, { useState } from "react";

function SubmitForm(props) {
    const { addNewTask, setIsFormVisible } = props;

    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    const handleChange = e => {
        const fieldName = e.target.name;
        setValues({...values, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (values.title) {
            addNewTask(values.title, values.description)
        }
        setIsFormVisible(false);
    } 

    return (
      <form onSubmit={handleSubmit} className='form'>
          <input 
          className="form__input" 
          type="text" 
          placeholder="Enter task title"
          name="title" 
          value={values.title} 
          onChange={handleChange} 
          />
          <textarea 
          className="form__description" 
          type="text" 
          placeholder="Enter task description" 
          name="description"
          value={values.description} 
          onChange={handleChange} 
          />
          <button 
          className="button__submit" 
          type="submit"
          >
              Submit
        </button>
      </form>  
    )
}

export default SubmitForm;