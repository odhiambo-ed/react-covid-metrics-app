import { createSlice } from '@reduxjs/toolkit';

export const dateSlice = createSlice({
  name: 'date',
  initialState: {
    value: [],
  },
  reducers: {
    addDate: (state, action) => {
      const fromdd = String(action.payload.from.getDate()).padStart(2, '0');
      const frommm = String(action.payload.from.getMonth() + 1).padStart(2, '0');
      const fromyyyy = action.payload.from.getFullYear();

      const from = `${fromyyyy}-${frommm}-${fromdd}`;

      const todd = String(action.payload.to.getDate()).padStart(2, '0');
      const tomm = String(action.payload.to.getMonth() + 1).padStart(2, '0');
      const toyyyy = action.payload.to.getFullYear();

      const to = `${toyyyy}-${tomm}-${todd}`;

      state.value = [
        {
          from,
          to,
        },
      ];
    },
  },
});

export const { addDate } = dateSlice.actions;
export default dateSlice.reducer;
