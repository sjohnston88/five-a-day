import React, { Component } from "react";
import { func, object } from "prop-types";
import { Auth } from "aws-amplify";
import {
  isValidPasswordLength,
  isValidEmailFormat
} from "../../utils/validations";
import ErrorPanel from "../../Components/ErrorPanel";
import { connect } from "react-redux";
import Types from "../../redux/types";
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
  static propTypes = {
    location: object,
    handleRegisterSubmit: func.isRequired
  };

  static defaultProps = {
    location: {}
  };

  constructor() {
    super();
    this.state = {
      emptyName: false,
      emptyEmail: false,
      invalidEmail: false,
      emptyPassword: false,
      passwordTooShort: false,
      confirmPasswordMismatch: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      cognitoError: ""
    };
  }

  handleNameInputChange = e => {
    const { value } = e.target;
    this.setState(() => ({
      name: value,
      emptyName: false
    }));
  };

  handleEmailInputChange = e => {
    const { value } = e.target;
    this.setState(() => ({
      email: value,
      emptyEmail: false,
      invalidEmail: false
    }));
  };

  handlePasswordInputChange = e => {
    const { value } = e.target;
    this.setState({
      password: value,
      emptyPassword: false,
      passwordTooShort: false
    });
  };

  handleConfirmPasswordInputChange = e => {
    const { value } = e.target;
    this.setState({
      confirmPassword: value,
      confirmPasswordMismatch: false
    });
  };

  handleNameBlur = () => {
    const { name } = this.state;
    if (name.length === 0) {
      this.setState({ emptyName: true });
    }
  };

  handleEmailBlur = () => {
    const { email } = this.state;
    if (email.length === 0) {
      this.setState({ emptyEmail: true });
    } else if (!isValidEmailFormat(email)) {
      this.setState({ invalidEmail: true });
    }
  };

  handlePasswordBlur = () => {
    const { password } = this.state;
    if (password.length === 0) {
      this.setState({ emptyPassword: true });
    } else if (password.length < 8) {
      this.setState({ passwordTooShort: true });
    }
  };

  handleConfirmPasswordBlur = () => {
    const { password, confirmPassword } = this.state;
    if (confirmPassword !== password) {
      this.setState({ confirmPasswordMismatch: true });
    }
  };

  displayErrorPanel = () => {
    const {
      emptyName,
      invalidEmail,
      emptyEmail,
      passwordTooShort,
      emptyPassword,
      confirmPasswordMismatch,
      cognitoError
    } = this.state;
    if (emptyName) return <ErrorPanel message="Please enter a name" />;
    if (invalidEmail)
      return <ErrorPanel message="Sorry your email is invalid" />;
    if (emptyEmail) return <ErrorPanel message="Please enter an email" />;
    if (passwordTooShort) return <ErrorPanel message="Password is too short" />;
    if (emptyPassword)
      return <ErrorPanel message="Please enter your password" />;
    if (confirmPasswordMismatch)
      return <ErrorPanel message="Passwords do not match" />;
    if (cognitoError) return <ErrorPanel message={cognitoError} />;
    return "";
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    this.setState(() => ({ password: "" }));
    if (name.length === 0) {
      this.setState({ emptyName: true });
    } else if (email.length === 0) {
      this.setState({ emptyEmail: true });
    } else if (!isValidEmailFormat(email)) {
      this.setState({ invalidEmail: true });
    } else if (password.length === 0) {
      this.setState({ emptyPassword: true });
    } else if (!isValidPasswordLength(password)) {
      this.setState({ passwordTooShort: true });
    } else {
      try {
        await Auth.signUp({
          username: email,
          password,
          attributes: {
            name
          }
        });
        this.props.history.push("./authenticated");
      } catch (error) {
        this.setState({ cognitoError: error.message });
      }
    }
  };
  render() {
    return (
      <Container>
        <Logo src={LogoImage} alt="" />
        <RegisterContainer onSubmit={this.handleSubmit}>
          <NameInput
            type="text"
            placeholder="Your name"
            autoComplete="name"
            onBlur={this.handleNameBlur}
            onChange={this.handleNameInputChange}
            value={this.state.name}
          />
          <EmailInput
            type="email"
            placeholder="E-mail address"
            autoComplete="email"
            onBlur={this.handleEmailBlur}
            onChange={this.handleEmailInputChange}
            value={this.state.email}
          />
          <PasswordInput
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            onBlur={this.handlePasswordBlur}
            onChange={this.handlePasswordInputChange}
            value={this.state.password}
          />
          <ConfirmPasswordInput
            type="password"
            placeholder="Confirm password"
            autoComplete="new-password"
            onBlur={this.handleConfirmPasswordBlur}
            onChange={this.handleConfirmPasswordInputChange}
            value={this.state.confirmPassword}
          />

          {this.displayErrorPanel()}

          <RegisterButton type="submit">Register</RegisterButton>
        </RegisterContainer>
        <HelpContainer>
          <Login href="./"> &laquo; Back to Login</Login>
        </HelpContainer>
      </Container>
    );
  }
}
const mapStateToProps = ({ router }) => ({
  location: router.location
});

export const mapDispatchToProps = dispatch => ({
  handleRegisterSubmit: (name, email, password) => {
    dispatch({
      type: Types.REGISTER_SUBMIT,
      name,
      email,
      password
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
