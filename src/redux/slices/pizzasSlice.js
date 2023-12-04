import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pizzas: [],
  isLoadingViaAPI: false,
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (params, thunkAPI) => {
    try {
      const { category, sort, order, searchRequest } = params;
      const res = await axios.get(
        `https://654fb2ee358230d8f0cda05a.mockapi.io/pizzaData?${category}&${sort}&${order}&search=${searchRequest}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    // getPizzas: (state, action) => {
    //   state.pizzas = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      state.pizzas = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.isLoadingViaAPI = false;
    });
  },
});

// export const { getPizzas } = pizzasSlice.actions;

export const selectPizzas = (state) => state.pizzas.pizzas;
export const selectIsLoadingViaAPI = (state) => state.pizzas.isLoadingViaAPI;

export default pizzasSlice.reducer;
