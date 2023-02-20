import * as actionTypes from "../actionTypes/productActionTypes";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.product,
        productCount: action.payload.productCount,
      };
    case actionTypes.ALL_PRODUCT_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
