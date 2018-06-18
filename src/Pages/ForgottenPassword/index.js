import React, { Component } from "react";
import { shape, func, string, object } from "prop-types";
import { isValidEmailFormat } from "../../utils/validations";
import ErrorPanel from "../../Components/ErrorPanel";
import { connect } from "react-redux";
import Types from "../../redux/types";
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
  static propTypes = {
    location: object,
    forgottenPassword: shape({
      cognitoErrorMessage: string
    }).isRequired,
    handleForgottenPassword: func.isRequired
  };

  constructor() {
    super();
    this.state = {
      emptyEmail: false,
      invalidEmail: false,
      email: ""
    };
  }

  handleEmailInputChange = e => {
    const { value } = e.target;
    this.setState(() => ({
      email: value,
      emptyEmail: false,
      invalidEmail: false
    }));
  };

  handleEmailBlur = () => {
    const { email } = this.state;
    if (email.length === 0) {
      this.setState({ emptyEmail: true });
    } else if (!isValidEmailFormat(email)) {
      this.setState({ invalidEmail: true });
    }
  };

  displayErrorPanel = () => {
    const { invalidEmail, emptyEmail } = this.state;
    if (invalidEmail)
      return <ErrorPanel message="Sorry your email is invalid" />;
    if (emptyEmail) return <ErrorPanel message="Please enter an email" />;
    return "";
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email } = this.state;
    this.setState(() => ({ password: "" }));
    if (email.length === 0) {
      this.setState({ emptyEmail: true });
    } else if (!isValidEmailFormat(email)) {
      this.setState({ invalidEmail: true });
    } else {
      //this.props.handleForgottenPassword(email);
    }
  };

  render() {
    return (
      <Container>
        <Logo src={LogoImage} alt="" />
        <ForgottenPasswordContainer onSubmit={this.handleSubmit}>
          <EmailInput
            type="email"
            placeholder="E-mail address"
            autoComplete="username"
            onBlur={this.handleEmailBlur}
            onChange={this.handleEmailInputChange}
            value={this.state.email}
          />

          {this.displayErrorPanel()}

          <ResetPassword type="sumbit">Reset Password</ResetPassword>
        </ForgottenPasswordContainer>
        <HelpContainer>
          <Login href="./"> &laquo; Back to Login</Login>
        </HelpContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ forgottenPassword, router }) => ({
  forgottenPassword,
  location: router.location
});

export const mapDispatchToProps = dispatch => ({
  handleForgottenPassword: email => {
    dispatch({
      type: Types.FORGOTTEN_PASSWORD_SUBMIT,
      email
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgottenPassword);
