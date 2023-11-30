import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'Все',
  sort: 'популярности',
  searchRequest: '',
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
    setSearchRequest: (state, action) => {
      state.searchRequest = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearchRequest } = filterSlice.actions;

export const selectCategory = (state) => state.filter.category;
export const selectSort = (state) => state.filter.sort;
export const selectSearchRequest = (state) => state.filter.searchRequest;

export default filterSlice.reducer;
