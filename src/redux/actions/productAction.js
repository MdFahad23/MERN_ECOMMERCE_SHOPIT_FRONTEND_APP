import * as actionTypes from "../actionTypes/productActionTypes";
import axios from "axios";

import { API } from "../../Utils/config";

// Get all Product
export const getProduct =
  (
    keyword = "",
    currentPage = 1,
    price = [0, 200000],
    category = "",
    ratings = 0
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.ALL_PRODUCT_REQUEST });

      let link = `${API}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `${API}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const data = await axios.get(link);

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

// Get all Products
export const getProducts =
  (currentPage = 1, price = [0, 200000], category = "", ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.ALL_PRODUCT_REQUEST });

      let link = `${API}/api/v1/products?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `${API}/api/v1/products?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const data = await axios.get(link);

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

// Get all Category
export const getCategory = () => async (dispatch) => {
  try {
    const data = await axios.get(`${API}/api/v1/category`);

    dispatch({
      type: actionTypes.ALL_CATEGORY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.ALL_CATEGORY_FAIL, payload: error.response });
  }
};

// Put Reviews
export const PutReviews = (token, formData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.REVIEWS_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.put(`${API}/api/v1/review`, formData, config);

    dispatch({ type: actionTypes.REVIEWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.REVIEWS_FAIL, payload: error });
  }
};
