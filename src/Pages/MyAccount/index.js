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
      userEmail: "",
      userName: ""
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

  handleNameChange = async event => {
    event.preventDefault();
    this.setState({ userName: event.target.value });
  };

  handleUpdateName = async event => {
    event.preventDefault();
    const user = await Auth.currentAuthenticatedUser();
    try {
      await Auth.updateUserAttributes(user, {
        email: this.state.userEmail,
        family_name: this.state.userName
      });
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    this.setState({ userEmail: user.attributes.email });
    if (user.attributes.family_name) {
      this.setState({ userName: user.attributes.family_name });
    }
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
        <NameInput
          onChange={this.handleNameChange}
          onBlur={this.handleUpdateName}
          placeholder="Name"
          value={this.state.userName}
        />
        <EmailInput placeholder="E-mail address" value={this.state.userEmail} />
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
