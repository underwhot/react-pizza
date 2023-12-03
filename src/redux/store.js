import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import todosReducer from './slices/todosSlice';
import filertReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    filter: filertReducer,
    cart: cartReducer,
  },
});
