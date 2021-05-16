/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { DAILY } from "../constants/Chart";

export const chartSlice = createSlice({
  name: "chart",
  initialState: {
    increment: DAILY,
  },
  reducers: {
    updateIncrement: (state, action) => {
      state.increment = action.payload;
    },
  },
});

export const { updateIncrement } = chartSlice.actions;

export default chartSlice.reducer;
