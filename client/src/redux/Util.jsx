import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    search(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { search } = utilSlice.actions;
export default utilSlice.reducer;
