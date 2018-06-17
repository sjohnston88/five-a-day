import React, { Component } from "react";
import { shape, bool, func, string, object } from "prop-types";
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
    signIn: shape({
      cognitoErrorMessage: string,
      loading: bool.isRequired
    }).isRequired,
    handleSignInSubmit: func.isRequired,
    handleModalClose: func.isRequired
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
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <Container>
        <Logo src={LogoImage} alt="" />
        <LoginContainer>
          <EmailInput
            type="email"
            placeholder="E-mail address"
            autoComplete="username"
          />
          <PasswordInput
            type="password"
            placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
            autoComplete="current-password"
          />
          <LoginButton href="./authenticated">Login</LoginButton>
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

const mapStateToProps = ({ login, router }) => ({
  login,
  location: router.location
});

export const mapDispatchToProps = dispatch => ({
  handleSignInSubmit: (email, password) => {
    dispatch({
      type: Types.SIGN_IN_SUBMIT,
      email,
      password
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
