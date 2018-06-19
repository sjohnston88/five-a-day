import React, { Component } from "react";
import { func, object } from "prop-types";
import Amplify, { Auth } from "aws-amplify";
import { isValidEmailFormat } from "../../utils/validations";
import ErrorPanel from "../../Components/ErrorPanel";
import { connect } from "react-redux";
import Types from "../../redux/types";
import LogoImage from "../../Images/logo.svg";
import aws_exports from "../../aws-exports";

import {
  Container,
  ForgottenPasswordContainer,
  HelpContainer,
  Logo,
  SuccessPanel,
  EmailInput,
  ResetPassword,
  Login
} from "./styles";

Amplify.configure(aws_exports);

class ForgottenPassword extends Component {
  static propTypes = {
    location: object,
    handleForgottenPassword: func.isRequired
  };

  constructor() {
    super();
    this.state = {
      emptyEmail: false,
      invalidEmail: false,
      email: "",
      cognitoError: "",
      emailSent: false
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
    const { invalidEmail, emptyEmail, cognitoError } = this.state;
    if (invalidEmail)
      return <ErrorPanel message="Sorry your email is invalid" />;
    if (emptyEmail) return <ErrorPanel message="Please enter an email" />;
    if (cognitoError) return <ErrorPanel message={cognitoError} />;
    return "";
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email } = this.state;
    this.setState(() => ({ password: "" }));
    if (email.length === 0) {
      this.setState({ emptyEmail: true });
    } else if (!isValidEmailFormat(email)) {
      this.setState({ invalidEmail: true });
    } else {
      try {
        await Auth.forgotPassword(email);
        this.setState({ emailSent: true });
      } catch (error) {
        this.setState({ cognitoError: error });
      }
    }
  };
  render() {
    return (
      <Container>
        <Logo src={LogoImage} alt="" />

        {this.state.emailSent ? (
          <SuccessPanel>
            Your request has been submitted and you should receive an email from
            us shortly.
          </SuccessPanel>
        ) : null}
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

const mapStateToProps = ({ router }) => ({
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
