import { put } from "redux-saga/effects";

import { INITIAL_ACTION } from "../actionTypes";

// worker Saga: will be fired on INITIAL_ACTION actions
function* initialSaga() {
  yield put({ type: INITIAL_ACTION, payload: { lastName: "YVes" } });
}

export default initialSaga;
