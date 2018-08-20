import React, { Component } from "react";
import { Auth } from "aws-amplify";

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
  constructor() {
    super();
    this.state = {
      userDetail: ""
    };
  }

  handleLogout = async event => {
    event.preventDefault();
    try {
      await Auth.signOut();
      this.props.history.push("./");
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    let user = await Auth.currentAuthenticatedUser();
    console.log(user);
  }

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
        <EmailInput
          placeholder="E-mail address"
          value={this.state.userDetail.attributes.email}
        />
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
        <LogOut onClick={this.handleLogout}>Logout</LogOut>
      </Container>
    );
  }
}

export default MyAccount;
