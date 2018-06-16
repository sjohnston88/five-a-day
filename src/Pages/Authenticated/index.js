import React from "react";
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

export class Authenticated extends React.Component {
  constructor() {
    super();
    this.state = {
      applicationData: [
        { name: "Strawberries", amount: "7" },
        { name: "Carrot", amount: "1" },
        { name: "Cucumber", amount: "1 inch" },
        { name: "Pumpkin", amount: "1 handful" },
        { name: "Raspberies", amount: "7" },
        { name: "Grapes", amount: "10" },
        { name: "Cherries", amount: "8" },
        { name: "Tomatoes", amount: "1" },
        { name: "Red Bell Pepper", amount: "half" },
        { name: "Orange", amount: "1" },
        { name: "Apple", amount: "1" },
        { name: "Chard", amount: "1 handful" }
      ],
      currentDay: ["Strawberries"],
      searchTerm: ""
    };
  }

  percentageCalculator = () => {
    return this.state.currentDay.length * 20;
  };

  handleAddItem = item => {
    this.setState(prevState => ({
      currentDay: [...prevState.currentDay, item]
    }));
  };

  handleRemoveItem = item => {
    this.setState({
      currentDay: this.state.currentDay.filter(items => {
        return items !== item;
      })
    });
  };

  search = event => {
    console.log(event.target.value);
    this.setState({
      applicationData: this.state.applicationData.find(searchResults => {
        return searchResults.name !== event.target.value;
      })
    });
  };

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
                diameter={210}
                percentage={this.percentageCalculator()}
                strokeWidth={15}
                stroke="darkorange"
              />
            </CurrentDay>
            <Nextday />
          </AchievementContainer>
          <DisplayedTotal>
            <BigText>{this.state.currentDay.length}</BigText> of{" "}
            <BigText>5</BigText>
            <DisplayedType>Fruits and Vegetables</DisplayedType>
          </DisplayedTotal>
        </HeadsUpDisplay>
        <SearchContainer>
          <SearchBar placeholder="Search" onChange={e => this.search(e)} />
          <ItemList>
            {this.state.applicationData.map(item => (
              <Item key={item.key}>
                <ItemImage />
                <ItemTitle>{item.name}</ItemTitle>
                <ItemAmount>
                  Eat {item.amount} {item.name} to count
                </ItemAmount>
                {this.state.currentDay.indexOf(`${item.name}`) > -1 ? (
                  <RemoveButton
                    onClick={() => this.handleRemoveItem(item.name)}
                  />
                ) : (
                  <AddButton onClick={() => this.handleAddItem(item.name)} />
                )}
              </Item>
            ))}
          </ItemList>
        </SearchContainer>
      </Container>
    );
  }
}

export default Authenticated;
