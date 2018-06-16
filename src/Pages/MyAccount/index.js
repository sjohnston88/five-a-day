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
          <option>Inches / Oz</option>
          <option>cm / g</option>
        </UnitToggleSwitch>
        <SectionTitle>Account Preferences</SectionTitle>
        <ChangePassword> Change Password</ChangePassword>
        <PrivacyPolicy href="./privacy-policy"> Privacy Policy </PrivacyPolicy>
        <LogOut href="./">Logout</LogOut>
      </Container>
    );
  }
}

export default MyAccount;
