import React from "react";
import { string, object } from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Login from "./Pages/Login";
import Authenticated from "./Pages/Authenticated";
import Register from "./Pages/Register";
import ForgottenPassword from "./Pages/ForgottenPassword";
import MyAccount from "./Pages/MyAccount";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ChangePassword from "./Pages/ChangePassword";
import { history } from "./redux/store";
import "./App.css";

const App = ({ location, serverSideError }) => (
  <div className="App">
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/authenticated" component={Authenticated} />
        <Route path="/register" component={Register} />
        <Route path="/forgotten-password" component={ForgottenPassword} />
        <Route path="/my-account" component={MyAccount} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/change-password" component={ChangePassword} />
      </Switch>
    </ConnectedRouter>
  </div>
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
  serverSideError: state.signIn.cognitoErrorMessage
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
