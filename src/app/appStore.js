import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../shared/model/categoriesSlice";
import productsSlice from "../shared/model/productsSlice";

export const store = configureStore({ 
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
  },
  devTools: true,
});