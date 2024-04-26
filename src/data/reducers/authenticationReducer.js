// userReducer.js
import * as TodoConstants from "../actions/authenticationActions";

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoConstants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        loading: false,
        error: null,
      };
    case TodoConstants.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        loading: false,
        error: null,
      };
    case TodoConstants.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TodoConstants.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
