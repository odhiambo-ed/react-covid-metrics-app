import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    value: [],
  },
  reducers: {
    addCountries: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
