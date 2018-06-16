import React, { Component } from "react";
import LogoImage from "../../Images/logo.svg";

import {
  Container,
  ForgottenPasswordContainer,
  HelpContainer,
  Logo,
  EmailInput,
  ResetPassword,
  Login
} from "./styles";

class ForgottenPassword extends Component {
  render() {
    return (
      <Container>
        <Logo src={LogoImage} alt />
        <ForgottenPasswordContainer>
          <EmailInput type="email" placeholder="E-mail address" />
          <ResetPassword href="./authenticated">Reset Password</ResetPassword>
        </ForgottenPasswordContainer>
        <HelpContainer>
          <Login href="./"> &laquo; Back to Login</Login>
        </HelpContainer>
      </Container>
    );
  }
}

export default ForgottenPassword;
