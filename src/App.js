import React from "react";
import { object } from "prop-types";
import Amplify, { Auth } from "aws-amplify";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Pages/Login";
import Authenticated from "./Pages/Authenticated";
import Register from "./Pages/Register";
import ForgottenPassword from "./Pages/ForgottenPassword";
import MyAccount from "./Pages/MyAccount";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ChangePassword from "./Pages/ChangePassword";
import NotFound from "./Pages/404";
import aws_exports from "./aws-exports";
import "./App.css";

Amplify.configure(aws_exports);
let isAuthenticated = Auth.currentSession().then(console.log(isAuthenticated));

export const App = ({ location }) => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/forgotten-password" component={ForgottenPassword} />
      <PrivateRoute path="/authenticated" component={Authenticated} />
      <PrivateRoute path="/my-account" component={MyAccount} />
      <PrivateRoute path="/change-password" component={ChangePassword} />
      <Route component={NotFound} />
    </div>
  </Router>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated.CognitoUserSession ? (
        <Component {...props} />
      ) : (
        //<Redirect to={{ pathname: "/", state: { from: props.location } }} />
        <Component {...props} />
      )
    }
  />
);

App.propTypes = {
  location: object
};

App.defaultProps = {
  location: {}
};

const mapStateToProps = state => ({
  location: state.router.location || {}
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
