import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "getProducts",
  initialState: { products: [], product: {} },

  reducers: {
    GET_PRODUCTS_SUCCESS: (state, action) => {
      state.products = action.payload;
    },

    GET_PRODUCTS_FAIL: (state, action) => {
      state.products = [];
      state.error = action.payload;
    },

    GET_PRODUCT_DETAIL_SUCCESS: (state, action) => {
      state.product = action.payload;
    },

    GET_PRODUCT_DETAIL_FAIL: (state, action) => {
      state.product = {};
      state.error = action.payload;
    },
  },
});

export const {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
} = productSlice.actions;

export const selectGetProducts = (state) => state.getProducts;

export default productSlice.reducer;
