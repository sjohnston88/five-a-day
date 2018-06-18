import { all } from "redux-saga/effects";
import loginSaga from "./Login";

function* rootSaga(userPool) {
  yield all([loginSaga(userPool)]);
}

export default rootSaga;
