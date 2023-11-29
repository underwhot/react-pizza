import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
});

export const selectCategories = (state) => state.filter.categories;

export default filterSlice.reducer;
