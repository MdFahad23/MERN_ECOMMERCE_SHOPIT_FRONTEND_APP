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

// Clear Error
export const clearError = () => async (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ERRORS });
};
