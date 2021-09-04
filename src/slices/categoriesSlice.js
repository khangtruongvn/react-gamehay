import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoiesApi from "../apis/categoriesApi";
import { loadState } from "../app/localStorage";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (params, getState) => {
    const response = await categoiesApi.getAll();
    return response;
  }
);

const initialState = loadState()
  ? loadState().categories
  : {
      status: null,
      data: [],
    };

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.status = "loading";
    },
    [getCategories.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [getCategories.rejected]: (state) => {
      state.status = "failed";
      state.data = [];
    },
  },
});

const { reducer } = categoriesSlice;
export default reducer;
