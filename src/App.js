import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Authenticated from "./Pages/Authenticated";
import Register from "./Pages/Register";
import ForgottenPassword from "./Pages/ForgottenPassword";
import MyAccount from "./Pages/MyAccount";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ChangePassword from "./Pages/ChangePassword";
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
      <Route path="/my-account" component={MyAccount} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/change-password" component={ChangePassword} />
    </div>
  </Router>
);

export default App;
