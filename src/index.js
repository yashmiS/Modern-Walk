import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Page from "./screens/Page";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <App />
        </Route>
        <Route exact path={"/men"}>
          <Page title="Men's clothing" category="men's clothing" />
        </Route>
        <Route exact path={"/women"}>
          <Page title="Women's clothing" category="women's clothing" />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
