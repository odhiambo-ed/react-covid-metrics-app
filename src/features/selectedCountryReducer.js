import { createSlice } from '@reduxjs/toolkit';

export const selectedCountrySlice = createSlice({
  name: 'country',
  initialState: {
    value: [],
  },
  reducers: {
    addCountry: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCountry } = selectedCountrySlice.actions;
export default selectedCountrySlice.reducer;
