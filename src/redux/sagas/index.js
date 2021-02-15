import { call, put, takeLatest } from "redux-saga/effects";
import login from "../../services/API/login";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "../actionTypes";

// worker Saga: will be fired on fetch user actions
function* loginUser(action) {
  try {
    const apiResponse = yield call(login, action.payload);
    yield put({ type: LOGIN_USER_SUCCESS, payload: apiResponse });
  } catch (error) {
    yield put({ type: LOGIN_USER_FAILURE, payload: error.message });
  }
}

function* userLoginRequest() {
  yield takeLatest(LOGIN_USER_REQUEST, loginUser);
}

export default userLoginRequest;
