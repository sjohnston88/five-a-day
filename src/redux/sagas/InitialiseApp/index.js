import { takeEvery } from "redux-saga/effects";
import Types from "../../types";

export function* initialiseAppSaga() {
  yield takeEvery(Types.START_APP, process.env.REACT_APP_ENV);
}

export default initialiseAppSaga;
