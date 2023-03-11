import React , {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deleteTodo , updateTodo } from '../features/todos/todoSlice';

export default function Todo(props) {
    debugger;
    const {todo} = props;
    const dispatch = useDispatch();

    const [isEdit , setIsEdit] = useState(false);
    const [editValue , SetEditValue] = useState(todo.text.text);

    const saveToDo = () => {
        const payload ={
            id : todo.id,
            text: {
                text: editValue,
                date: new Date
            }
        }
        dispatch(updateTodo(payload));
        cancelEdit();
    }

    const cancelEdit = () =>{
        debugger;
        setIsEdit(false);
    }

    return isEdit ? (
        <form onSubmit={saveToDo}>
            <input type='text' value={editValue} onChange={(e)=> SetEditValue(e.target.value)}/>
            <button type='submit'>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
        </form>
    ) : (
        <>
            <span>{todo.text.text}</span>
            <span>--</span>
            <span>{todo.text.date.toString()}</span>
            <button onClick={() => setIsEdit(!isEdit)}>EDIT</button>
            <button onClick={() => dispatch(deleteTodo(todo))}>DELETE</button>
        </>
    )
}