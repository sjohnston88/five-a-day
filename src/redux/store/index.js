import { compose, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import reducers from "../reducers";
import Types from "../types";

export const history = createHistory();
const reactRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middleware = [reactRouterMiddleware, sagaMiddleware];
const enhancers = [applyMiddleware(...middleware)];

if (
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  process.env.NODE_ENV !== "production"
) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const enhancer = compose(...enhancers);
const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

store.dispatch({
  type: Types.START_APP
});

export default store;
