import React, { Component } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

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
        <UnitToggleSwitch placeholder="Inches / Cups" />
        <SectionTitle>Account Preferences</SectionTitle>
        <ChangePassword> Change Password</ChangePassword>
        <PrivacyPolicy> Privacy Policy </PrivacyPolicy>
        <LogOut href="./">Logout</LogOut>
      </Container>
    );
  }
}

export default MyAccount;
