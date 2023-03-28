import * as actionTypes from "../actionTypes/userActionTypes";
import axios from "axios";

import { API } from "../../Utils/config";
import { authentication } from "../../Utils/auth";

// Login User
export const LoginUsers = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${API}/api/v1/user/login`,
      { email, password },
      config
    );

    authentication(data.token);

    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error.message,
    });
  }
};

// Register User
export const RegisterUsers = (FormData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${API}/api/v1/user/register`,
      FormData,
      config
    );

    authentication(data.token);

    dispatch({ type: actionTypes.REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_USER_FAIL,
      payload: error.message,
    });
  }
};

// Update Profile
export const updateProfile = (token, FormData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.UPDATE_PROFILE_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.put(
      `${API}/api/v1/user/update/me`,
      FormData,
      config
    );

    dispatch({ type: actionTypes.UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_PROFILE_FAIL,
      payload: error.message,
    });
  }
};

// Update Password
export const updatePassword = (token, FormData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.UPDATE_PASSWORD_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.put(
      `${API}/api/v1/user/password/update`,
      FormData,
      config
    );

    authentication(data.token);

    dispatch({ type: actionTypes.UPDATE_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_PROFILE_FAIL,
      payload: error.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.FORGOT_PASSWORD_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${API}/api/v1/user/password/forget`,
      email,
      config
    );

    dispatch({ type: actionTypes.FORGOT_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.FORGOT_PASSWORD_FAIL,
      payload: error.message,
    });
  }
};

// Reset Password
export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.RESET_PASSWORD_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `${API}/api/v1/user/password/reset/${token}`,
      password,
      config
    );

    dispatch({ type: actionTypes.RESET_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.RESET_PASSWORD_FAIL,
      payload: error,
    });
  }
};

// Clear User
export const clearUser = () => async (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_USER });
  dispatch({ type: actionTypes.UPDATE_PROFILE_RESET });
};

// Clear Error
export const clearError = () => async (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ERRORS });
};
