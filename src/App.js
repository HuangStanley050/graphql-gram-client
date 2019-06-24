import React from "react";

import { Switch, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import PicturesPage from "./pages/pictures";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/pictures" component={PicturesPage} />
    </Switch>
  );
}

export default App;
