import glamorous from "glamorous";
import ErrorIcon from "../../Images/outline-error_outline-24px.svg";

export const Panel = glamorous.div({
  position: "relative",
  top: "-5px",
  backgroundImage: `url(${ErrorIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "24px 24px",
  backgroundPosition: "13px 10px",
  backgroundColor: "#f2dede",
  padding: "15px 15px 15px 50px",
  width: "100%",
  fontSize: "13px",
  color: "#a94442",
  border: "1px solid #ebccd1",
  borderRadius: 0,
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px"
});
