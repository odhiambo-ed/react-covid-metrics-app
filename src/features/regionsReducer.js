import { createSlice } from '@reduxjs/toolkit';

export const regionsSlice = createSlice({
  name: 'regions',
  initialState: {
    value: [],
  },
  reducers: {
    addRegions: (state, action) => {
      state.value = [action.payload];
    },
  },
});

export const { addRegions } = regionsSlice.actions;
export default regionsSlice.reducer;
