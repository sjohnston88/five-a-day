import glamorous from "glamorous";
import MyAccountIconImage from "../../Images/outline-account_box-24px.svg";
import ArrowForward from "../../Images/outline-arrow_forward_ios-24px.svg";
import ArrowBack from "../../Images/outline-arrow_back_ios-24px.svg";
import SearchIcon from "../../Images/outline-search-24px.svg";
import AddButtonIcon from "../../Images/outline-add_circle_outline-24px.svg";
import RemoveButtonIcon from "../../Images/outline-remove_circle_outline-24px.svg";
import CloseIconImage from "../../Images/baseline-close-24px.svg";

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

export const MyAccount = glamorous.a({
  flex: "50%",
  textDecoration: "none",
  textAlign: "right",
  fontSize: "14px",
  color: "#666"
});

export const MyAccountIcon = glamorous.div({
  margin: "-1px 0 0 5px",
  backgroundImage: `url(${MyAccountIconImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "18px 18px",
  float: "right",
  width: "18px",
  height: "18px"
});

export const DisplayedDate = glamorous.div({
  width: "100%",
  padding: "10px 0 0px 0",
  textDecoration: "none",
  textAlign: "center",
  fontSize: "16px",
  color: "#666"
});

export const HeadsUpDisplay = glamorous.div({
  padding: "0 10px 20px 10px"
});

export const AchievementContainer = glamorous.div({
  display: "flex",
  padding: "10px 0 0 0"
});

export const PreviousDay = glamorous.div({
  flex: "5%",
  backgroundImage: `url(${ArrowBack})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "34px 140px"
});

export const ClearSearchButton = glamorous.button({
  display: "block",
  position: "absolute",
  top: "15px",
  right: "20px",
  width: "30px",
  height: "30px",
  backgroundImage: `url(${CloseIconImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "30px 30px",
  backgroundColor: "#fff",
  border: "none",
  outline: "none"
});

export const CurrentDay = glamorous.div({
  margin: "0 auto",
  display: "flex",
  flex: "80%",
  justifyContent: "space-around"
});

export const Nextday = glamorous.div({
  flex: "5%",
  backgroundImage: `url(${ArrowForward})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "34px 140px"
});

export const DisplayedTotal = glamorous.div({
  textDecoration: "none",
  letterSpacing: "1.2",
  textAlign: "center",
  fontSize: "20px",
  color: "#666"
});

export const DisplayedType = glamorous.div({
  textDecoration: "none",
  letterSpacing: "1.2",
  textAlign: "center",
  fontSize: "16px",
  color: "#666"
});

export const BigText = glamorous.span({
  fontSize: "36px"
});

export const BiggerText = glamorous.span({
  color: "darkorange",
  fontSize: "42px"
});

export const SearchContainer = glamorous.div({
  position: "relative",
  background: "#fff",
  height: "100%"
});

export const SearchBar = glamorous.input({
  margin: 0,
  backgroundImage: `url(${SearchIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "30px 30px",
  backgroundPosition: "15px 16px",
  width: "100%",
  padding: "20px 20px 20px 60px",
  fontSize: "18px",
  letterSpacing: "0.5",
  border: "none",
  borderRadius: "none",
  borderBottom: "1px solid #ccc",
  outline: "none"
});

export const ItemList = glamorous.div({
  margin: "0",
  paddingBottom: "100%",
  position: "relative",
  width: "100%",
  height: "100%",
  borderBottom: "1px solid #ccc",
  overflow: "scroll"
});

export const Item = glamorous.div({
  position: "relative",
  height: "75px",
  borderTop: "1px solid #ccc",
  padding: "15px 20px 15px 60px"
});

export const ItemTitle = glamorous.p({
  margin: "0",
  fontSize: "18px"
});

export const ItemAmount = glamorous.p({
  margin: "5px 0 0 0",
  fontSize: "14px",
  color: "#ccc"
});

export const ItemImage = glamorous.div({});

export const AddButton = glamorous.button({
  margin: "-36px 0",
  float: "right",
  width: "30px",
  height: "30px",
  backgroundImage: `url(${AddButtonIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "30px 30px",
  backgroundColor: "#fff",
  border: "none",
  outline: "none"
});

export const RemoveButton = glamorous.button({
  margin: "-36px 0",
  float: "right",
  width: "30px",
  height: "30px",
  backgroundImage: `url(${RemoveButtonIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "30px 30px",
  backgroundColor: "#fff",
  border: "none",
  outline: "none"
});
