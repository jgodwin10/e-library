import { configureStore } from "@reduxjs/toolkit";
import utilReducer from "./Util";

export const store = configureStore({
  reducer: {
    Util: utilReducer,
  },
});
