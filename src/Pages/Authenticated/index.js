import React, { Component } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

import {
  Container,
  HeaderContainer,
  Logo,
  MyAccount,
  MyAccountIcon,
  HeadsUpDisplay,
  AchievementContainer,
  PreviousDay,
  CurrentDay,
  DisplayedDate,
  Nextday,
  DisplayedType,
  DisplayedTotal,
  BigText,
  ManageContainer,
  AddSomething,
  RemoveSomething,
  Statistics,
  Information
} from "./styles";
var ProgressBar = require("react-progressbar.js");
var Circle = ProgressBar.Circle;

class Authenticated extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Logo>Fruits &amp; Veggies</Logo>
          <MyAccount href="./">
            <MyAccountIcon />
            My Account
          </MyAccount>
        </HeaderContainer>
        <HeadsUpDisplay>
          <DisplayedDate> Today </DisplayedDate>
          <AchievementContainer>
            <PreviousDay />
            <CurrentDay>
              <SemiCircleProgressBar
                diameter={300}
                percentage={60}
                strokeWidth={15}
                stroke="darkorange"
              />
            </CurrentDay>
            <Nextday />
          </AchievementContainer>
          <DisplayedTotal>
            <BigText>3</BigText> of <BigText>5</BigText>
            <DisplayedType>Fruits and Vegetables</DisplayedType>
          </DisplayedTotal>
        </HeadsUpDisplay>
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
