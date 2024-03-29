import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'Redux/store';

const filtersInitialState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    filter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilter = (state: RootState) => state.filter.value;
