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
        resultPerPage: action.payload.resultPerPage,
      };
    case actionTypes.ALL_PRODUCT_FAIL:
      return {
        loading: false,
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

export const ReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.REVIEWS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.REVIEWS_SUCCESS:
      return {
        loading: false,
        messages: action.payload,
      };
    case actionTypes.REVIEWS_FAIL:
      return {
        loading: false,
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

export const CategoryReducer = (state = { Category: [] }, action) => {
  switch (action.type) {
    case actionTypes.ALL_CATEGORY_SUCCESS:
      return {
        Category: action.payload,
      };
    case actionTypes.ALL_CATEGORY_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
