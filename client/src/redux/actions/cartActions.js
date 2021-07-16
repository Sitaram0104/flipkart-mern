import axios from "axios";

import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAIL,
} from "../features/cartSlice.js";

const url = process.env.REACT_APP_URL;

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/product/${id}`);
    dispatch(ADD_TO_CART_SUCCESS(data));
  } catch (error) {
    console.log("Error while calling products api");
    dispatch(ADD_TO_CART_FAIL("error"));
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    dispatch(REMOVE_FROM_CART_SUCCESS(id));
  } catch (error) {
    console.log("Error while calling products api");
    dispatch(REMOVE_FROM_CART_FAIL("error"));
  }
};
