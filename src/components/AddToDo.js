import React ,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

export default function AddToDo(){
    const [text , setText] = useState("");;
    const dispatch = useDispatch();

    const handleChange=(e) => {
        setText(e.target.value);
      }

    const addToDoHandler = (event) => {
        event.preventDefault();
        // dispatch(addTodo(new Date));
        var obj = {
            text: text,
            date: new Date
        }
        dispatch(addTodo(obj));
        setText('');
    }
    return (
        <form onSubmit={addToDoHandler}>
            <input type='text' value={text} onChange={handleChange}/>
            <button>Add todo</button>
        </form>
    )
}