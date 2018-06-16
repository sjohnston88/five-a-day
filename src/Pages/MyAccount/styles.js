import glamorous from "glamorous";

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
  padding: "20px 30px 10px 30px",
  width: "100%",
  height: "50px"
});

export const Logo = glamorous.div({
  flex: "50%",
  textAlign: "left",
  fontSize: "14px",
  color: "#666"
});

export const LogOut = glamorous.a({
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
