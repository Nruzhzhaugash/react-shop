import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/shared/model/productsSlice";
import categoriesSlice from "../shared/model/categoriesSlice";
import { apiSlice } from "../shared/api/apiSlice";

export const store = configureStore({ 
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});