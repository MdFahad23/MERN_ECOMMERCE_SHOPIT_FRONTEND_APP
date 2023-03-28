import * as actionTypes from "../actionTypes/CartActionTypes";

export const CartItemReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART_REQUEST:
      return {
        ...state,
        message: "Item add to cart request!",
      };
    case actionTypes.ADD_CART_SUCCESS:
      return {
        ...state,
        message: null,
        success: action.payload,
      };
    case actionTypes.ADD_CART_FAIL:
      return {
        ...state,
        message: null,
        success: null,
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
