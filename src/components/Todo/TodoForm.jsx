import React, { useState } from 'react';

export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({id:value, content:value, checked:false});
    }

    const handleFormSubmit = () => {
        onAddTodo(inputValue);
        setInputValue({id:"", content:"", checked:""}); // Clear the input field after submission
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" className="Todo-input" autoComplete="off" value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)} />
            </div>
            <div>
                <button type="submit" className="todo-btn">Add Task</button>  
            </div>
        </form>
    );
};