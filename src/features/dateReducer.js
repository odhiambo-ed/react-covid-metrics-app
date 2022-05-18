import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    value: [],
  },
  reducers: {
    addDate: (state, action) => {
      var fromdd = String(action.payload.from.getDate()).padStart(2, "0");
      var frommm = String(action.payload.from.getMonth() + 1).padStart(2, "0");
      var fromyyyy = action.payload.from.getFullYear();

      let from = fromyyyy + "-" + frommm + "-" + fromdd;

      var todd = String(action.payload.to.getDate()).padStart(2, "0");
      var tomm = String(action.payload.to.getMonth() + 1).padStart(2, "0");
      var toyyyy = action.payload.to.getFullYear();

      let to = toyyyy + "-" + tomm + "-" + todd;

      state.value = [
        {
          from: from,
          to: to,
        },
      ];
    },
  },
});

export const { addDate } = dateSlice.actions;
export default dateSlice.reducer;
