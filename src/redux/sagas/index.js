import { call, takeLatest } from "redux-saga/effects";
import login from "../../services/API/login";

// worker Saga: will be fired on INITIAL_ACTION actions
function* loginUser(data) {
  try {
    const apiResponse = yield call(login, data);
    return apiResponse;
  } catch {
    yield "Error is happening";
  }
}

export default loginUser;
