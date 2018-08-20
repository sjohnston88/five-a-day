import React, { Component } from "react";
import { object } from "prop-types";
import Amplify, { Auth } from "aws-amplify";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

class App extends Component {
  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        const userHasAuthenticated = true;
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/forgotten-password" component={ForgottenPassword} />
          <Route path="/authenticated" component={Authenticated} />
          <Route path="/my-account" component={MyAccount} />
          <Route path="/change-password" component={ChangePassword} />
          <Route component={NotFound} />
        </div>
      </Router>
    );
  }
}

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
