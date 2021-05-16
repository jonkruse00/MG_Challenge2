import { configureStore } from "@reduxjs/toolkit";
import paramReducer from "../redux/paramSlice";
import logReducer from "../redux/logSlice";
import chartReducer from "../redux/chartSlice";

const store = configureStore({
  reducer: {
    param: paramReducer,
    log: logReducer,
    chart: chartReducer,
  },
});

export default store;
