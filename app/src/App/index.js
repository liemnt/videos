import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import configureStore from "../store";
import rootSaga from "../sagas";
import "antd/dist/antd.css";

const store = configureStore({});
store.runSaga(rootSaga);
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}
