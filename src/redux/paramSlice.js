/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_QUERY } from "../constants/Query";

export const paramSlice = createSlice({
  name: "param",
  initialState: {
    query: DEFAULT_QUERY,
    gte: DEFAULT_QUERY.query.range.timestamp.gte,
    lt: DEFAULT_QUERY.query.range.timestamp.lt,
  },
  reducers: {
    resetQuery: (state) => {
      state.query = DEFAULT_QUERY;
      state.gte = DEFAULT_QUERY.query.range.timestamp.gte;
      state.lt = DEFAULT_QUERY.query.range.timestamp.lt;
    },
    setGte: (state, action) => {
      state.query.query.range.timestamp.gte = action.payload;
      state.gte = action.payload;
    },
    setLt: (state, action) => {
      state.query.query.range.timestamp.lt = action.payload;
      state.lt = action.payload;
    },
  },
});

export const { resetQuery, setGte, setLt } = paramSlice.actions;

export default paramSlice.reducer;
