import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import gamesApi from "../apis/gamesApi";

export const getAllGames = createAsyncThunk(
  "games/getAllGames",
  async (params, state) => {
    const response = await gamesApi.getAll(params);
    return response;
  }
);
const initialState = {
  status: null,
  data: [],
};
const gamesSlice = createSlice({
  name: "name",
  initialState: initialState,
  extraReducers: {
    [getAllGames.pending]: (state) => {
      state.status = "loading";
    },
    [getAllGames.fulfilled]: (state, action) => {
      const data = action.payload;
      state.status = "success";
      state.data = [...state.data, ...data.data];
    },
    [getAllGames.rejected]: (state) => {
      state.status = "failed";
      state.status = [];
    },
  },
});

const { reducer } = gamesSlice;
export default reducer;
