import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../../../constants/actionTypes";
import { signUpSuccess, signUpError } from "../../action";
import { API } from "../api/apiAuth";

function* onSignUp(action) {
  const { info , callback } = action.payload;
  console.log(info)
  try {
    yield delay(500, true);
    const request = yield call(API.signUpFromApi, info);
    if (request.data.status_code === 200) {
      yield put(signUpSuccess(request.data.data));
      sessionStorage.setItem("USER", JSON.stringify(request.data.data));
      yield callback();
    } else {
      yield put(signUpError);
    }
  } catch (error) {
    yield put(signUpError);
  }
}

function* watchOnSignup() {
  yield takeLatest(Types.SIGN_UP_REQUEST, onSignUp);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnSignup),
  ]);
}
