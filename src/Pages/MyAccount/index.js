import React, { Component } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

import { Container, HeaderContainer, Logo, LogOut } from "./styles";

class Authenticated extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Logo>Fruits &amp; Veggies</Logo>
        </HeaderContainer>
        <LogOut href="./">Logout</LogOut>
      </Container>
    );
  }
}

export default Authenticated;
