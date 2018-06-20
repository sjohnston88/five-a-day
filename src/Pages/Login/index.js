import React, { Component } from "react";
import { func, object } from "prop-types";
import { Auth } from "aws-amplify";
import {
  isValidPasswordLength,
  isValidEmailFormat
} from "../../utils/validations";
import ErrorPanel from "../../Components/ErrorPanel";
import { connect } from "react-redux";
import Types from "../../redux/types";
import LogoImage from "../../Images/logo.svg";

import {
  Container,
  LoginContainer,
  SocialLoginContainer,
  HelpContainer,
  Divider,
  Logo,
  EmailInput,
  PasswordInput,
  LoginButton,
  FacebookButton,
  GoogleButton,
  ForgottenPassword,
  CreateAnAccount
} from "./styles";

export class Login extends Component {
  static propTypes = {
    location: object,
    handleLoginSubmit: func.isRequired
  };

  static defaultProps = {
    location: {}
  };

  constructor() {
    super();
    this.state = {
      emptyEmail: false,
      invalidEmail: false,
      emptyPassword: false,
      passwordTooShort: false,
      cognitoError: "",
      email: "",
      password: ""
    };
  }

  handleEmailInputChange = e => {
    const { value } = e.target;
    this.setState(() => ({
      email: value,
      emptyEmail: false,
      invalidEmail: false,
      cognitoError: ""
    }));
  };

  handlePasswordInputChange = e => {
    const { value } = e.target;
    this.setState({
      password: value,
      emptyPassword: false,
      passwordTooShort: false,
      cognitoError: ""
    });
  };

  handleEmailBlur = () => {
    const { email } = this.state;
    if (email.length === 0) {
      this.setState({ emptyEmail: true });
    } else if (!isValidEmailFormat(email)) {
      this.setState({ invalidEmail: true });
    }
  };

  handlePasswordBlur = () => {
    const { password } = this.state;
    if (password.length === 0) {
      this.setState({ emptyPassword: true });
    } else if (password.length < 8) {
      this.setState({ passwordTooShort: true });
    }
  };

  displayErrorPanel = error => {
    const {
      invalidEmail,
      emptyEmail,
      passwordTooShort,
      emptyPassword,
      cognitoError
    } = this.state;
    if (invalidEmail)
      return <ErrorPanel message="Sorry your email is invalid" />;
    if (emptyEmail) return <ErrorPanel message="Please enter an email" />;
    if (passwordTooShort) return <ErrorPanel message="Password is too short" />;
    if (emptyPassword)
      return <ErrorPanel message="Please enter your password" />;
    if (cognitoError) return <ErrorPanel message={cognitoError} />;
    return "";
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState(() => ({ password: "" }));
    if (email.length === 0) {
      this.setState({ emptyEmail: true });
    } else if (!isValidEmailFormat(email)) {
      this.setState({ invalidEmail: true });
    } else if (password.length === 0) {
      this.setState({ emptyPassword: true });
    } else if (!isValidPasswordLength(password)) {
      this.setState({ passwordTooShort: true });
    } else {
      try {
        await Auth.signIn(email, password);
        this.props.history.push("./authenticated");
      } catch (error) {
        this.setState({ cognitoError: error.message });
      }
    }
  };

  render() {
    return (
      <Container>
        <Logo src={LogoImage} alt="" />
        <LoginContainer onSubmit={this.handleSubmit}>
          <EmailInput
            type="email"
            placeholder="E-mail address"
            autoComplete="username"
            onBlur={this.handleEmailBlur}
            onChange={this.handleEmailInputChange}
            value={this.state.email}
          />
          <PasswordInput
            type="password"
            placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
            autoComplete="current-password"
            onBlur={this.handlePasswordBlur}
            onChange={this.handlePasswordInputChange}
            value={this.state.password}
          />

          {this.displayErrorPanel()}

          <LoginButton type="submit">Login</LoginButton>
        </LoginContainer>
        <Divider />
        <SocialLoginContainer>
          <FacebookButton href="./authenticated">
            Login with Facebook
          </FacebookButton>
          <GoogleButton href="./authenticated">Login with Google</GoogleButton>
        </SocialLoginContainer>
        <HelpContainer>
          <ForgottenPassword href="./forgotten-password">
            Forgot password?
          </ForgottenPassword>
          <CreateAnAccount href="./register">
            New here? Register
          </CreateAnAccount>
        </HelpContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ router }) => ({
  location: router.location
});

export const mapDispatchToProps = dispatch => ({
  handleLoginSubmit: (email, password) => {
    dispatch({
      type: Types.LOGIN_SUBMIT,
      email,
      password
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
