import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todosList: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // state.todosList.push(action.payload);
      return { ...state, todosList: [action.payload, ...state.todosList] };
    },
  },
});

export const { addTodo } = todosSlice.actions;

export const selectTodosList = (state) => state.todos.todosList;

export default todosSlice.reducer;
