import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersApi from "../apis/usersApi";


export const getAllUser = createAsyncThunk("users/getUsers", async () => {
  const response = await usersApi.getAll();
  return response;
});

export const postUser = createAsyncThunk("users/postUser", async (data) => {
  const response = await usersApi.registerUser(data);
  return response;
});

const initialState = {
  status: null,
  data: [],
};

const usersSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: {
    [getAllUser.pending]: (state) => {
      state.status = "loading";
      state.data = [];
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [getAllUser.rejected]: (state) => {
      state.status = "failed";
      state.data = [];
    },
  },
});

const { reducer } = usersSlice;
export default reducer;
