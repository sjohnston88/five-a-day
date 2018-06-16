import React, { Component } from "react";
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

class Login extends Component {
  render() {
    return (
      <Container>
        <Logo src={LogoImage} alt />
        <LoginContainer>
          <EmailInput type="email" placeholder="E-mail address" />
          <PasswordInput
            type="password"
            placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
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

export default Login;
