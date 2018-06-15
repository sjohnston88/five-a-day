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
          <PasswordInput
            type="password"
            placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
          />
          <ConfirmPasswordInput
            type="password"
            placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
          />
          <RegisterButton href="./authenticated">Register</RegisterButton>
        </RegisterContainer>
        <HelpContainer>
          <Login href="./">Login</Login>
        </HelpContainer>
      </Container>
    );
  }
}

export default Register;
