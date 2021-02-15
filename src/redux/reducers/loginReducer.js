import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../actionTypes";

const loginReducer = (
  state = { user: {}, loginInProgress: false },
  { type, payload }
) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loginInProgress: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginInProgress: false,
        user: payload,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginInProgress: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
