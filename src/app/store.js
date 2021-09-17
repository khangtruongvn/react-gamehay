import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../slices/categoriesSlice";
import gamesReducer from "../slices/gamesSlice";
import themeReducer from "../slices/themeSlice";
import formReducer from "../slices/formSlice";
import usersReducer from "../slices/usersSlice";
import userReducer from "../slices/userSlice";
import { saveState } from "./localStorage";


const rootReducer = {
  categories: categoriesReducer,
  games: gamesReducer,
  theme: themeReducer,
  form: formReducer,
  users: usersReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  console.log("đã lưu");
  saveState(store.getState());
});
export default store;
