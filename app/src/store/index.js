import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  window.__REDUX_DEVTOOLS_EXTENSION__ =
    window.__REDUX_DEVTOOLS_EXTENSION__ ||
    function(f) {
      return f;
    };

  const store = createStore(rootReducer, initialState, compose(...enhancers));
  store.runSaga = sagaMiddleware.run;

  return store;
}
