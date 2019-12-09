import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../store";
import rootSaga from "../sagas";
import "antd/dist/antd.css";
import Page from "../Page";

const store = configureStore({});
store.runSaga(rootSaga);
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Page />
        </div>
      </Router>
    </Provider>
  );
}
