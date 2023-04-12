import * as actionTypes from "../actionTypes/PaymentActionTypes";

// Payment Reducer
export const PaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        url: action.payload,
      };
    case actionTypes.GET_PAYMENT_FAIL:
      return {
        ...state,
        loading: false,
        url: null,
        fail: action.payload,
      };
    case actionTypes.ERRORS:
      return {
        ...state,
        loading: false,
        url: null,
        fail: null,
        errors: action.payload,
      };
    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };

    default:
      return state;
  }
};

// Order Reducer
export const OrderReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case actionTypes.GET_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        order: null,
        errors: action.payload,
      };
    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};
