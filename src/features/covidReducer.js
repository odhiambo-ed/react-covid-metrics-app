import { createSlice } from '@reduxjs/toolkit';

export const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    value: [
      {
        id: 1,
        name: 'Hello',
      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = covidSlice.actions;
export default covidSlice.reducer;
