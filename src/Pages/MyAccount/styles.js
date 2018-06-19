import glamorous from "glamorous";
import HomeIconImage from "../../Images/outline-home-24px.svg";

export const Container = glamorous.div({
  margin: "0 auto",
  fontFamily: "'Roboto', sans-serif",
  background: "linear-gradient(rgba(238,238,238,1), rgba(204,204,204,1))",
  backgroundPosition: "top center",
  maxWidth: "600px",
  width: "100%",
  height: "100%"
});

export const HeaderContainer = glamorous.div({
  display: "flex",
  padding: "20px 20px 10px 20px",
  width: "100%",
  height: "50px"
});

export const Logo = glamorous.div({
  flex: "50%",
  textAlign: "left",
  fontSize: "14px",
  color: "#666"
});

export const Home = glamorous.a({
  flex: "50%",
  textDecoration: "none",
  textAlign: "right",
  fontSize: "14px",
  color: "#666"
});

export const HomeIcon = glamorous.div({
  margin: "-1px 0 0 5px",
  backgroundImage: `url(${HomeIconImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "18px 18px",
  float: "right",
  width: "18px",
  height: "18px"
});

export const SectionTitle = glamorous.p({
  padding: "0 20px",
  textAlign: "left",
  fontSize: "16px",
  color: "#666"
});

export const NameInput = glamorous.input({
  margin: 0,
  backgroundColor: "#fff",
  display: "block",
  width: "100%",
  padding: "15px 20px",
  textAlign: "left",
  textDecoration: "none",
  fontSize: "16px",
  color: "#666",
  border: "none",
  borderRadius: "none",
  borderBottom: "1px solid #ccc"
});

export const EmailInput = glamorous.input({
  margin: 0,
  backgroundColor: "#fff",
  display: "block",
  width: "100%",
  padding: "15px 20px",
  textAlign: "left",
  textDecoration: "none",
  fontSize: "16px",
  color: "#666",
  border: "none",
  borderRadius: "none"
});

export const UnitToggleSwitch = glamorous.select({
  appearance: "none",
  backgroundColor: "#fff",
  display: "block",
  width: "100%",
  padding: "15px 20px",
  textAlign: "right",
  textAlignLast: "right",
  textDecoration: "none",
  fontSize: "16px",
  color: "#a9a9a9",
  border: "none"
});

export const Option = glamorous.option({
  appearance: "none",
  backgroundColor: "#fff",
  display: "block",
  width: "100%",
  padding: "15px 20px",
  textAlign: "right",
  textAlignLast: "right",
  textDecoration: "none",
  fontSize: "16px",
  color: "#a9a9a9",
  border: "none"
});

export const ChangePassword = glamorous.a({
  margin: "0 0 15px 0",
  backgroundColor: "#fff",
  display: "block",
  width: "100%",
  padding: "15px 20px",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "16px",
  color: "#666",
  border: "none"
});

export const PrivacyPolicy = glamorous.a({
  margin: "0 0 15px 0",
  backgroundColor: "#fff",
  display: "block",
  width: "100%",
  padding: "15px 20px",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "16px",
  color: "#666",
  border: "none"
});

export const LogOut = glamorous.button({
  margin: "0 0 15px 0",
  backgroundColor: "#fff",
  display: "block",
  width: "100%",
  padding: "15px 20px",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "16px",
  color: "#666",
  border: "none"
});
