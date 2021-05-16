/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
  name: "log",
  initialState: {
    content: [],
  },
  reducers: {
    loadLog: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { loadLog } = logSlice.actions;

export default logSlice.reducer;
