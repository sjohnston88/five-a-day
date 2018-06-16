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
  SearchContainer,
  SearchBar,
  ItemList,
  Item,
  ItemImage,
  ItemTitle,
  ItemAmount,
  AddButton,
  RemoveButton
} from "./styles";

class Authenticated extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Logo>Fruits &amp; Veggies</Logo>
          <MyAccount href="./my-account">
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
                diameter={260}
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
        <SearchContainer>
          <SearchBar placeholder="Search" />
          <ItemList>
            <Item>
              <ItemImage />
              <ItemTitle>Raspberries</ItemTitle>
              <ItemAmount>Eat 7 raspberries to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Strawberries</ItemTitle>
              <ItemAmount>Eat 7 strawberries to count</ItemAmount>
              <RemoveButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Carrot</ItemTitle>
              <ItemAmount>Eat 1 carrot to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Orange</ItemTitle>
              <ItemAmount>Eat 1 orange to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Cucumber</ItemTitle>
              <ItemAmount>Eat 1 inch of cucumber to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Strawberries</ItemTitle>
              <ItemAmount>Eat 7 strawberries to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Strawberries</ItemTitle>
              <ItemAmount>Eat 7 strawberries to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Orange</ItemTitle>
              <ItemAmount>Eat 1 orange to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Cucumber</ItemTitle>
              <ItemAmount>Eat 1 inch of cucumber to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Strawberries</ItemTitle>
              <ItemAmount>Eat 7 strawberries to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Strawberries</ItemTitle>
              <ItemAmount>Eat 7 strawberries to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Orange</ItemTitle>
              <ItemAmount>Eat 1 orange to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Cucumber</ItemTitle>
              <ItemAmount>Eat 1 inch of cucumber to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Strawberries</ItemTitle>
              <ItemAmount>Eat 7 strawberries to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Strawberries</ItemTitle>
              <ItemAmount>Eat 7 strawberries to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Orange</ItemTitle>
              <ItemAmount>Eat 1 orange to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Cucumber</ItemTitle>
              <ItemAmount>Eat 1 inch of cucumber to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Strawberries</ItemTitle>
              <ItemAmount>Eat 7 strawberries to count</ItemAmount>
              <AddButton />
            </Item>
            <Item>
              <ItemImage />
              <ItemTitle>Strawberries</ItemTitle>
              <ItemAmount>Eat 7 strawberries to count</ItemAmount>
              <AddButton />
            </Item>
          </ItemList>
        </SearchContainer>
      </Container>
    );
  }
}

export default Authenticated;
