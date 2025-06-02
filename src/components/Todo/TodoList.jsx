import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, checked, onHandleDeleteTodo, onHandleCheckTodo }) => {
    return(
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className='check-btn' onClick={() => onHandleCheckTodo(data)}> <MdCheck /></button>
            <button className='delete-btn' onClick={() => onHandleDeleteTodo(data)}><MdDeleteForever /></button>
            <input type="text" className="form-control" placeholder="Edit your task here" />
            {/* <button className="btn btn-danger" onClick={() => setTask(task.filter((_, i) => i !== index))}>Delete</button> */}
        </li>
    );
};