import * as actionTypes from "../actionTypes/PaymentActionTypes";
import axios from "axios";

import { API } from "../../Utils/config";

export const GetPayment = (token) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PAYMENT_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(`${API}/api/v1/payment`, config);

    console.log(data);

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

// Clear Error
export const clearError = () => async (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ERRORS });
};
