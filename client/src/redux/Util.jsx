import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  keyword: "",
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "",
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
    setCredentials: (state, action) => {
      state.token += action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("details");
    },
  },
});

export const { search, word, setCredentials, logout } = utilSlice.actions;
export default utilSlice.reducer;
