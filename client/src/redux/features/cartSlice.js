import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },

  reducers: {
    ADD_TO_CART_SUCCESS: (state, action) => {
      const item = action.payload;

      const exist = state.cartItems.find((product) => product.id === item.id);

      if (!exist) {
        state.cartItems.push(item);
      }
    },

    ADD_TO_CART_FAIL: (state, action) => {
      state.error = action.payload;
    },

    REMOVE_FROM_CART_SUCCESS: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((product) => product.id !== id);
    },

    REMOVE_FROM_CART_FAIL: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAIL,
} = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
