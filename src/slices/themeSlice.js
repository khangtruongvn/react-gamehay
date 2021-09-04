import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../app/localStorage";

const initialState = loadState() ? loadState().theme : "dark";
const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme: (state, action) => {
      return (state = action.payload);
    },
  },
});

const { reducer, actions } = themeSlice;
export const { changeTheme } = actions;
export default reducer;
