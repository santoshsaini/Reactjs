import React, { useState } from 'react';
import "./Todo.css";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { getLocalStorageTodos, setLocalStorageTodos } from './TodoLocalStorage';


export const Todo = () => {
    const [task, setTask] = useState(() => getLocalStorageTodos());
 
    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;
        event.preventDefault();
        if(!content) return;

        // if (task.includes(inputValue)) {return; } // Prevent adding duplicate tasks
        const ifTodoContentMatch = task.find(
            (curTask) => curTask.content === content 
        )
        if (ifTodoContentMatch) return;

        setTask((prevTask) => [ ...prevTask, {id, content, checked} ]);   
    };

    setLocalStorageTodos(task); // Save tasks to localStorage whenever task state changes
    
    // todo handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        // console.log(task);
        // console.log(value);
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    };

    const handdleClearTodoData = () => {
        setTask([]);
        
    };

    const HandleCheckTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            }
            else {
                return curTask;
            }
        });
        setTask(updatedTask);
    }
   
    return (
        <div>
 
        <section className="form">
            <header>
                <h1 className="text-black h3">Todo List</h1>
                <TodoDate />
            </header>
            <TodoForm onAddTodo={handleFormSubmit} /> 
        </section>

        <section>
            <ul className="todo-list">
                {task.map((curTask) => {
                   return (
                    <TodoList key={curTask.id} data={curTask.content} checked={curTask.checked} onHandleDeleteTodo={handleDeleteTodo} onHandleCheckTodo={HandleCheckTodo} />
                   );
                })}
            </ul>

            <section className='clear-btn text-center mx-auto' onClick={handdleClearTodoData}>
                Clear All
            </section>
                
            {/* {task.length === 0 && (
                <div className="empty-list text-center">
                    <h2 className="text-black">No Task Found</h2>
                    <p className="text-black">Please add a task to your list.</p>
                </div>
            )}

            {task.length > 0 && (
                <div className="task-count text-center">
                    <h2 className="text-black">Total Task: {task.length}</h2>
                </div>
            )}
                
            <div className="text-center">
                <button className="btn btn-warning" onClick={() => setTask([])} disabled={task.length === 0}>
                    Clear All
                </button>
            </div>
            
             

            {task.length > 5 && (
                <div className="pagination text-center mt-3">
                    {Array.from({ length: Math.ceil(task.length / 5) }).map((_, pageIndex) => (
                        <button
                            key={pageIndex}
                            className="btn btn-secondary mx-1"
                            onClick={() => setCurrentPage(pageIndex)}
                            disabled={currentPage === pageIndex}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}
                </div>
            )} */}

            {/* <div className="text-center mt-3">
                <button
                    className="btn btn-info"
                    onClick={() => window.location.reload()}
                >
                    Auto Refresh
                </button>
            </div> */}

        </section>
        </div>
    )
}