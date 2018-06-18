import { takeLatest, call, put } from "redux-saga/effects";
import Types from "../../types";

export function* signInFailure(error) {
  if (
    error.code === "NotAuthorizedException" ||
    error.code === "UserNotFoundException"
  ) {
    yield put({ type: Types.LOGIN_PASSWORD_ERROR });
  } else {
    console.log(`Sign In Error -> ${error} -> ${error.stack}`);
    yield put({ type: Types.LOGIN_COGNITO_ERROR });
  }
}

export function* signInSubmit(userPool, { email, password }) {
  try {
    const user = yield call(signIn, userPool, email, password);
    //set auth & redirect
  } catch (error) {
    yield call(signInFailure, error, userPool, email, password);
  }
}

export function* signInSaga(userPool) {
  yield takeLatest(Types.SIGN_IN_SUBMIT, signInSubmit, userPool);
}

export default signInSaga;
