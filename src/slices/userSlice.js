import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersApi from "../apis/usersApi";
import { loadState } from "../app/localStorage";

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  const response = await usersApi.getDetails(id);
  return response;
});

const initialState = loadState()
  ? loadState().user
  : { status: null, data: {} };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logoutUser: (state) => {
      state.status = "logout";
      state.data = {};
    },
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.status = "loading";
      state.data = {};
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "loading";
      state.data = action.payload;
    },
    [getUser.pending]: (state) => {
      state.status = "failed";
      state.data = {};
    },
  },
});

const { reducer, actions } = userSlice;
export const { logoutUser } = actions;
export default reducer;
