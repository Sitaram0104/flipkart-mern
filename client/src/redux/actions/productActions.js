import axios from "axios";

import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
} from "../features/productSlice.js";

const url = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`);
    dispatch(GET_PRODUCTS_SUCCESS(data));
  } catch (error) {
    console.log("Error while calling products api");
    dispatch(GET_PRODUCTS_FAIL("error"));
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/product/${id}`);
    dispatch(GET_PRODUCT_DETAIL_SUCCESS(data));
  } catch (error) {
    console.log("Error while calling products api");
    dispatch(GET_PRODUCT_DETAIL_FAIL("error"));
  }
};
