import * as actionTypes from "../actionTypes/PaymentActionTypes";
import axios from "axios";

import { API } from "../../Utils/config";

// GET Payment
export const GetPayment = (token) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PAYMENT_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(`${API}/api/v1/payment`, config);

    if (data.status === "SUCCESS") {
      dispatch({
        type: actionTypes.GET_PAYMENT_SUCCESS,
        payload: data.GatewayPageURL,
      });
    } else if (data.status === "FAILED") {
      dispatch({
        type: actionTypes.GET_PAYMENT_FAIL,
        payload: data.failedreason,
      });
    }
  } catch (error) {
    dispatch({ type: actionTypes.ERRORS, payload: error });
  }
};

// GET Order
export const GetOrder = (token) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ORDER_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(`${API}/api/v1/payment/order`, config);

    dispatch({ type: actionTypes.GET_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_ORDER_FAIL, payload: error });
  }
};

// Clear Error
export const clearError = () => async (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ERRORS });
};
