import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../app/localStorage";

const initialState = loadState() ? loadState().form : "grid";
const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    changeForm: (state, action) => {
      return (state = action.payload);
    },
  },
});

const { reducer, actions } = formSlice;
export const { changeForm } = actions;
export default reducer;
