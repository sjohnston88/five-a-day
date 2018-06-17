import { all } from "redux-saga/effects";
import initialiseAppSaga from "./InitialiseApp";
import Login from "./Login";

function* rootSaga(userPool) {
  yield all([initialiseAppSaga(), Login(userPool)]);
}

export default rootSaga;
