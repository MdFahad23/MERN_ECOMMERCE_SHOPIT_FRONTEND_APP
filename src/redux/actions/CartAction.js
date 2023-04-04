import * as actionTypes from "../actionTypes/CartActionTypes";
import axios from "axios";

import { API } from "../../Utils/config";

// Add Cart Item
export const AddCartItem = (token, cartItem) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_CART_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.post(`${API}/api/v1/cart`, cartItem, config);

    dispatch({ type: actionTypes.ADD_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_CART_FAIL, payload: error });
  }
};

// Get Cart Item
export const GetCartItem = (token) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CART_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(`${API}/api/v1/cart`, config);

    dispatch({ type: actionTypes.GET_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_CART_FAIL, payload: error });
  }
};

// Update Cart Item
export const UpdateCartItem = (token, cartItem) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.UPDATE_CART_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.put(`${API}/api/v1/cart`, cartItem, config);

    dispatch({ type: actionTypes.UPDATE_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.UPDATE_CART_FAIL, payload: error });
  }
};

// Delete Cart Item
export const DeleteCartItem = (token, id) => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.delete(`${API}/api/v1/cart/${id}`, config);

    dispatch({ type: actionTypes.DELETE_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.DELETE_CART_FAIL, payload: error });
  }
};

// Add Shipping Address
export const AddShippingAddress = (token, address) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SHIPPING_ADDRESS_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.post(`${API}/api/v1/profile`, address, config);

    dispatch({ type: actionTypes.SHIPPING_ADDRESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.SHIPPING_ADDRESS_FAIL, payload: error });
  }
};

// Add Shipping Address
export const GetShippingAddress = (token) => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(`${API}/api/v1/profile`, config);

    dispatch({ type: actionTypes.GET_SHIPPING_ADDRESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_SHIPPING_ADDRESS_FAIL, payload: error });
  }
};

// Clear Error
export const clearError = () => async (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ERRORS });
};
