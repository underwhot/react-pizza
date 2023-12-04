import { configureStore } from '@reduxjs/toolkit';

import filertReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import pizzasReducer from './slices/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter: filertReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
  },
});
