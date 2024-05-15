import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  keyword: ''
};

const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    search(state, action) {
      state.filter = action.payload;
    },
    word(state, action) {
      state.keyword = action.payload;
    },
  },
});

export const { search, word } = utilSlice.actions;
export default utilSlice.reducer;
