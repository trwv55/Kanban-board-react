import React, { useState } from "react";

type SubmitFormProps = {
  addNewTask: (title: string, description: string) => void
  setIsFormVisible:  React.Dispatch<React.SetStateAction<boolean>> 
  isFormVisible:  any
  setIsButtonVisible:  React.Dispatch<React.SetStateAction<boolean>> 
}

const SubmitForm: React.FC<SubmitFormProps> = ({ addNewTask, setIsFormVisible, isFormVisible, setIsButtonVisible }) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.title) {
      addNewTask(values.title, values.description);
    }
    setIsFormVisible(false);
    setIsButtonVisible(true);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='form__input'
        type='text'
        placeholder='Enter task title'
        name='title'
        value={values.title}
        onChange={handleChange}
      />
      <textarea
        className='form__description'
        // type='text'
        placeholder='Enter task description'
        name='description'
        value={values.description}
        onChange={handleChange}
      />
      <button className={isFormVisible && "button__submit"}>{isFormVisible && "Submit"}</button>
    </form>
  );
};

export default SubmitForm;
