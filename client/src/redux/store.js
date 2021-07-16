import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productSlice.js";
import cartReducer from "./features/cartSlice.js";

export const store = configureStore({
  reducer: {
    getProducts: productsReducer,
    cart: cartReducer,
  },
});
