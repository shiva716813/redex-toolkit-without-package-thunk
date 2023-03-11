import React from 'react';
import {useSelector} from 'react-redux';
import Todo from './ToDo';

export default function ToDos(){
    debugger;
    const toDos = useSelector(state => state.todos)
    console.log("todos: " , toDos);
    return (
        <div>
            <ul>
                {toDos.map((todo) => 
                    <li key= {todo.id}>
                        <Todo todo={todo}></Todo>
                    </li>
                )}
            </ul>
        </div>
    )
}
