import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      debugger;
      const todo = {
        id: uuid(),
        text: action.payload,
      };
      return [...state, todo];
    },
    updateTodo: (state, action) => {
      debugger;
      const { id, text } = action.payload;
      const todo = state.find(c => c.id == id);
      todo.text = text;
    },
    deleteTodo: (state, action) => {
      debugger;
      const { id } = action.payload;
      return state.filter(c => c.id !== id);
    },
  }
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;