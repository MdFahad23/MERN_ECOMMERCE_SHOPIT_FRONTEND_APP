import * as actionTypes from "../actionTypes/CartActionTypes";

// Cart Reducer
export const CartItemReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART_REQUEST:
      return {
        ...state,
        message: "Item add to cart request!",
        updateMessage: null,
      };
    case actionTypes.GET_CART_REQUEST:
      return {
        ...state,
        loading: true,
        cart: [],
        updateMessage: null,
      };
    case actionTypes.UPDATE_CART_REQUEST:
      return {
        ...state,
        updateMessage: "Update Cart Item request!",
      };
    case actionTypes.ADD_CART_SUCCESS:
      return {
        ...state,
        message: null,
        success: action.payload,
      };
    case actionTypes.GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        updateMessage: null,
        updateSuccess: null,
      };
    case actionTypes.UPDATE_CART_SUCCESS:
    case actionTypes.DELETE_CART_SUCCESS:
      return {
        ...state,
        updateMessage: null,
        updateSuccess: action.payload,
      };
    case actionTypes.ADD_CART_FAIL:
    case actionTypes.GET_CART_FAIL:
    case actionTypes.UPDATE_CART_FAIL:
    case actionTypes.DELETE_CART_FAIL:
      return {
        ...state,
        message: null,
        success: null,
        loading: false,
        cart: null,
        errors: action.payload,
        updateMessage: null,
        updateSuccess: null,
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

// Shipping Address Reducer
export const ShippingAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SHIPPING_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        redirect: false,
      };
    case actionTypes.SHIPPING_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        redirect: true,
      };

    case actionTypes.GET_SHIPPING_ADDRESS:
      return {
        ...state,
        message: null,
        address: action.payload,
        redirect: false,
      };
    case actionTypes.SHIPPING_ADDRESS_FAIL:
    case actionTypes.GET_SHIPPING_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        message: null,
        errors: action.payload,
        redirect: false,
      };
    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        redirect: false,
        errors: null,
      };
    default:
      return state;
  }
};
