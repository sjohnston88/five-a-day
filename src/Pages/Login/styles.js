import glamorous from "glamorous";
import Background from "../../Images/background.jpg";
import MailOutline from "../../Images/outline-email-24px.svg";
import Lock from "../../Images/outline-lock-24px.svg";
import FacebookIcon from "../../Images/facebook.svg";
import GoogleIcon from "../../Images/googleplus.svg";

export const Container = glamorous.div({
  margin: "0 auto",
  fontFamily: "'Roboto', sans-serif",
  background: `linear-gradient(rgba(0, 0, 150, 0.2), rgba(0, 0, 50, 0.6)), url(${Background})`,
  backgroundPosition: "top center",
  maxWidth: "600px",
  width: "100%",
  height: "100%",
  padding: "10px"
});

export const LoginContainer = glamorous.div({
  width: "100%",
  padding: "0px 12% 15px 12%"
});

export const SocialLoginContainer = glamorous.div({
  width: "100%",
  padding: "0px 12% 15px 12%"
});

export const HelpContainer = glamorous.div({
  width: "100%",
  display: "flex",
  padding: "0px 12% 15px 12%"
});

export const Logo = glamorous.img({
  width: "150px",
  display: "block",
  margin: "20px auto 40px auto"
});

export const EmailInput = glamorous.input({
  boxShadow: "0 0 3px rgba(0, 0, 0, 0.2) inset",
  backgroundImage: `url(${MailOutline})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "24px 24px",
  backgroundPosition: "13px 12px",
  width: "100%",
  padding: "15px 15px 15px 50px",
  fontSize: "16px",
  letterSpacing: "0.5",
  color: "#000",
  border: "1px solid #ccc",
  borderBottom: "none",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px"
});

export const PasswordInput = glamorous.input({
  boxShadow: "0 0 3px rgba(0, 0, 0, 0.2) inset",
  backgroundImage: `url(${Lock})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "24px 24px",
  backgroundPosition: "13px 12px",
  width: "100%",
  padding: "15px 15px 15px 50px",
  fontSize: "16px",
  lineHeight: "17px",
  letterSpacing: "0.5",
  color: "#000",
  border: "1px solid #ccc",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px"
});

export const LoginButton = glamorous.a({
  display: "block",
  outline: "none",
  margin: "15px 0",
  boxSizing: "border-box",
  width: "100%",
  backgroundColor: "darkorange",
  padding: "15px",
  fontSize: "16px",
  letterSpacing: "1.2",
  textDecoration: "none",
  textAlign: "center",
  color: "#fff",
  border: "1px solid #333",
  borderRadius: "5px"
});

export const Divider = glamorous.hr({
  margin: "0 auto",
  width: "50%",
  opacity: 0.7
});

export const FacebookButton = glamorous.a({
  backgroundImage: `url(${FacebookIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "22px 22px",
  backgroundPosition: "116px 13px",
  display: "block",
  outline: "none",
  margin: "25px 0 10px",
  boxSizing: "border-box",
  width: "100%",
  backgroundColor: "#3B5998",
  padding: "15px 20px 15px 150px",
  fontSize: "16px",
  letterSpacing: "1.2",
  textDecoration: "none",
  textAlign: "left",
  color: "#fff",
  border: "1px solid #333",
  borderRadius: "5px"
});

export const GoogleButton = glamorous.a({
  backgroundImage: `url(${GoogleIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "22px 22px",
  backgroundPosition: "116px 14px",
  display: "block",
  outline: "none",
  margin: "0 0 15px 0",
  boxSizing: "border-box",
  width: "100%",
  backgroundColor: "#dd4b39",
  padding: "15px 20px 15px 150px",
  fontSize: "16px",
  letterSpacing: "1.2",
  textDecoration: "none",
  textAlign: "left",
  color: "#fff",
  border: "1px solid #333",
  borderRadius: "5px"
});

export const ForgottenPassword = glamorous.a({
  display: "block",
  padding: "0 0 0 20px",
  width: "50%",
  textDecoration: "none",
  color: "#CCC",
  textAlign: "left"
});

export const CreateAnAccount = glamorous.a({
  display: "block",
  padding: "0 20px 0 0",
  width: "50%",
  textDecoration: "underline",
  color: "#CCC",
  textAlign: "right"
});