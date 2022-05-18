import { createSlice } from '@reduxjs/toolkit';

export const selectedRegionSlice = createSlice({
  name: 'region',
  initialState: {
    value: [],
  },
  reducers: {
    addRegion: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addRegion } = selectedRegionSlice.actions;
export default selectedRegionSlice.reducer;
