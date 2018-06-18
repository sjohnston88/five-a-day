import React from "react";
import { string, object } from "prop-types";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Pages/Login";
import Authenticated from "./Pages/Authenticated";
import Register from "./Pages/Register";
import ForgottenPassword from "./Pages/ForgottenPassword";
import MyAccount from "./Pages/MyAccount";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ChangePassword from "./Pages/ChangePassword";
import "./App.css";

export const App = ({ location, serverSideError }) => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/forgotten-password" component={ForgottenPassword} />
      <PrivateRoute path="/authenticated" component={Authenticated} />
      <PrivateRoute path="/my-account" component={MyAccount} />
      <PrivateRoute path="/change-password" component={ChangePassword} />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        //<Redirect to={{ pathname: "/",state: { from: props.location } }} />
        <Component {...props} />
      )
    }
  />
);

App.propTypes = {
  location: object,
  serverSideError: string
};

App.defaultProps = {
  location: {},
  serverSideError: ""
};

const mapStateToProps = state => ({
  location: state.router.location || {},
  serverSideError: state.login.cognitoErrorMessage
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
