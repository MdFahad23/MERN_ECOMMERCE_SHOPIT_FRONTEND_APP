import * as actionTypes from "../actionTypes/productActionTypes";
import axios from "axios";

import { API } from "../../Utils/config";

// Get all Product
export const getProduct =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.ALL_PRODUCT_REQUEST });

      const data = await axios.get(`${API}/api/v1/products?keyword=${keyword}`);
      dispatch({
        type: actionTypes.ALL_PRODUCT_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ALL_PRODUCT_FAIL,
        payload: error.response,
      });
    }
  };

// Clear Error
export const clearError = () => async (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ERRORS });
};
