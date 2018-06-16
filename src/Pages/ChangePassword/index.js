import React, { Component } from "react";

import {
  Container,
  HeaderContainer,
  Logo,
  MyAccount,
  MyAccountIcon,
  SectionTitle,
  PasswordInput,
  ConfirmPasswordInput,
  SavePassword
} from "./styles";

class ChangePassword extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Logo>Fruits &amp; Veggies</Logo>
          <MyAccount href="./my-account">
            <MyAccountIcon />
            My Account
          </MyAccount>
        </HeaderContainer>
        <SectionTitle>Change Password</SectionTitle>
        <PasswordInput type="password" placeholder="Old password" />
        <PasswordInput type="password" placeholder="New password" />
        <ConfirmPasswordInput type="password" placeholder="Confirm password" />
        <SavePassword href="./my-account">Save Password</SavePassword>
      </Container>
    );
  }
}

export default ChangePassword;
