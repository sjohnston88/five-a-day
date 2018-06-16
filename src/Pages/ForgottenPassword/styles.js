import glamorous from "glamorous";
import Background from "../../Images/background.jpg";
import MailOutline from "../../Images/outline-email-24px.svg";

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

export const ForgottenPasswordContainer = glamorous.div({
  width: "100%",
  padding: "0px 8% 0 8%"
});

export const HelpContainer = glamorous.div({
  width: "100%",
  display: "flex",
  padding: "0px 8% 15px 8%"
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
  borderRadius: "5px"
});

export const ResetPassword = glamorous.a({
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

export const Login = glamorous.a({
  display: "block",
  padding: "0px 20px",
  width: "100%",
  textDecoration: "underline",
  color: "#CCC",
  textAlign: "right"
});
