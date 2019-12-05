import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';


const TodoList = ({ todos, onDeleteHandle }) => {


    const el = todos.map(todo =>{
        const {id, ...todoProps} = todo;
        return (<li className="list-group-item d-flex justify-content-between align-items-center"
                    key={id}><TodoListItem{...todoProps} onDeleteHandle={() => onDeleteHandle(id)}/>
                </li>)
        });
    return(
        <ul className="list-group todoList mt-4">
            { el }
        </ul>
    );
};

export default TodoList;