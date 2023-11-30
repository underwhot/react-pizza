import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'Все',
  sort: 'популярности',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSort } = filterSlice.actions;

export const selectCategory = (state) => state.filter.category;
export const selectSort = (state) => state.filter.sort;

export default filterSlice.reducer;
