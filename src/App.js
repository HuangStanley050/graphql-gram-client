import React from "react";
import logo from "./logo.svg";
import {Switch, Route} from "react-router-dom";
import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
  );
}

export default App;
