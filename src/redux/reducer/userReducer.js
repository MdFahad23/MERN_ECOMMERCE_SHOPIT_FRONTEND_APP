import * as actionTypes from "../actionTypes/userActionTypes";

// User Reducer
export const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.REGISTER_USER_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        User: action.payload,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        loading: false,
        User: {},
        errors: null,
      };
    case actionTypes.LOGIN_FAIL:
    case actionTypes.REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        User: null,
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

// Profile Reducer
export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PROFILE_REQUEST:
    case actionTypes.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
    case actionTypes.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        update: true,
        isUpdate: action.payload,
      };
    case actionTypes.UPDATE_PROFILE_RESET:
      return {
        ...state,
        update: false,
      };
    case actionTypes.UPDATE_PROFILE_FAIL:
    case actionTypes.UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        update: false,
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
