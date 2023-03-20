import * as actionTypes from "../actionTypes/userActionTypes";

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
