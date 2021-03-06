import glamorous from "glamorous";
import Background from "../../Images/background.jpg";
import MailOutline from "../../Images/outline-email-24px.svg";
import Avatar from "../../Images/outline-perm_identity-24px.svg";
import Lock from "../../Images/outline-lock-24px.svg";

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

export const RegisterContainer = glamorous.form({
  width: "100%",
  padding: "0px 8% 0 8%"
});

export const HelpContainer = glamorous.div({
  width: "100%",
  display: "flex",
  padding: "0px 8% 15px 8%"
});

export const Logo = glamorous.img({
  width: "120px",
  display: "block",
  margin: "20px auto"
});

export const NameInput = glamorous.input({
  margin: 0,
  boxShadow: "0 0 3px rgba(0, 0, 0, 0.2) inset",
  backgroundImage: `url(${Avatar})`,
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
  borderRadius: 0,
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px"
});

export const EmailInput = glamorous.input({
  margin: 0,
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
  borderRadius: 0,
  borderBottom: "none",
  borderTop: "none"
});

export const PasswordInput = glamorous.input({
  margin: 0,
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
  borderRadius: 0,
  borderBottom: "none",
  borderTop: "none"
});

export const ConfirmPasswordInput = glamorous.input({
  margin: 0,
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
  borderRadius: 0,
  borderTop: "none",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px"
});

export const RegisterButton = glamorous.button({
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
  padding: "0px 10px",
  width: "100%",
  fontSize: "14px",
  textDecoration: "underline",
  color: "#CCC",
  textAlign: "right"
});
