import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./features/mailSlice.js";
import userReducer from "./features/userSlice.js";
import productsReducer from "./features/productSlice.js";
import cartReducer from "./features/cartSlice.js";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
    getProducts: productsReducer,
    cart: cartReducer,
  },
});
