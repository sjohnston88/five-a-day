import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Authenticated from "./Pages/Authenticated";
import Register from "./Pages/Register";
import ForgottenPassword from "./Pages/ForgottenPassword";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import "./App.css";

Amplify.configure(aws_exports);

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/authenticated" component={Authenticated} />
      <Route path="/register" component={Register} />
      <Route path="/forgotten-password" component={ForgottenPassword} />
    </div>
  </Router>
);

export default App;
