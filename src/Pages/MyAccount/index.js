import React, { Component } from "react";

import {
  Container,
  HeaderContainer,
  Logo,
  Home,
  HomeIcon,
  SectionTitle,
  NameInput,
  EmailInput,
  UnitToggleSwitch,
  Option,
  ChangePassword,
  PrivacyPolicy,
  LogOut
} from "./styles";

class MyAccount extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Logo>Fruits &amp; Veggies</Logo>
          <Home href="./authenticated">
            <HomeIcon />
            Home
          </Home>
        </HeaderContainer>
        <SectionTitle>Your Details</SectionTitle>
        <NameInput placeholder="Name" />
        <EmailInput placeholder="E-mail address" />
        <SectionTitle>Units &amp; Measures</SectionTitle>
        <UnitToggleSwitch>
          <Option>Inches / Oz</Option>
          <Option>cm / g</Option>
        </UnitToggleSwitch>
        <SectionTitle>Account Preferences</SectionTitle>
        <ChangePassword href="./change-password">
          {" "}
          Change Password
        </ChangePassword>
        <PrivacyPolicy href="./privacy-policy"> Privacy Policy </PrivacyPolicy>
        <LogOut href="./">Logout</LogOut>
      </Container>
    );
  }
}

export default MyAccount;
