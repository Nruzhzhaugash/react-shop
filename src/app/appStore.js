import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../shared/model/categoriesSlice";

export const store = configureStore({ 
  reducer: {
    categories: categoriesSlice,
  },
  devTools: true,
});