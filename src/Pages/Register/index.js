import React, { Component } from "react";
import LogoImage from "../../Images/logo.svg";

import {
  Container,
  RegisterContainer,
  HelpContainer,
  Logo,
  NameInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
  RegisterButton,
  Login
} from "./styles";

class Register extends Component {
  render() {
    return (
      <Container>
        <Logo src={LogoImage} alt />
        <RegisterContainer>
          <NameInput type="text" placeholder="Your name" />
          <EmailInput type="email" placeholder="E-mail address" />
          <PasswordInput type="password" placeholder="Password" />
          <ConfirmPasswordInput
            type="password"
            placeholder="Confirm password"
          />
          <RegisterButton href="./authenticated">Register</RegisterButton>
        </RegisterContainer>
        <HelpContainer>
          <Login href="./"> &laquo; Back to Login</Login>
        </HelpContainer>
      </Container>
    );
  }
}

export default Register;
