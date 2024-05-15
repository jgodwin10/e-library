import { configureStore } from "@reduxjs/toolkit";
import utilReducer from "./Util";
import { ApiSlice } from "./ApiSlice";

export const store = configureStore({
  reducer: {
    Util: utilReducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
});
