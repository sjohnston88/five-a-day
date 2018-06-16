import React, { Component } from "react";

import {
  Container,
  HeaderContainer,
  Logo,
  MyAccount,
  AchievementContainer,
  PreviousDay,
  CurrentDay,
  Nextday,
  ManageContainer,
  AddSomething,
  RemoveSomething,
  Statistics,
  Information
} from "./styles";

class Authenticated extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Logo />
          <MyAccount />
        </HeaderContainer>
        <AchievementContainer>
          <PreviousDay />
          <CurrentDay />
          <Nextday />
        </AchievementContainer>
        <ManageContainer>
          <AddSomething />
          <RemoveSomething />
          <Statistics />
          <Information />
        </ManageContainer>
      </Container>
    );
  }
}

export default Authenticated;
