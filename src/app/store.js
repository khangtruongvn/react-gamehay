import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../slices/categoriesSlice";
import gamesReducer from "../slices/gamesSlice";
import themeReducer from "../slices/themeSlice";
import formReducer from "../slices/formSlice";
import { saveState } from "./localStorage";

const rootReducer = {
  categories: categoriesReducer,
  games: gamesReducer,
  theme: themeReducer,
  form: formReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
