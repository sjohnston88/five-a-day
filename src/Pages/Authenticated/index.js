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
  BiggerText,
  SearchContainer,
  SearchBar,
  ClearSearchButton,
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
      date: "Today",
      currentDay: ["Strawberries"],
      previousDay: ["Strawberries", "Raspberries", "Cherries"],
      applicationData: [
        { name: "Strawberries", amount: "7" },
        { name: "Carrot", amount: "1" },
        { name: "Cucumber", amount: "1 inch" },
        { name: "Pumpkin", amount: "1 handful" },
        { name: "Raspberries", amount: "7" },
        { name: "Grapes", amount: "10" },
        { name: "Cherries", amount: "8" },
        { name: "Tomatoes", amount: "1" },
        { name: "Red Bell Pepper", amount: "half" },
        { name: "Orange", amount: "1" },
        { name: "Apple", amount: "1" },
        { name: "Chard", amount: "1 handful" }
      ],
      filteredData: [],
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

  searchItems = event => {
    this.setState({
      searchTerm: event.target.value,
      filteredData: this.state.applicationData.filter(data => {
        return (
          data.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        );
      })
    });
  };

  clearSearchTerm = () => {
    this.setState({
      searchTerm: "",
      filteredData: []
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
          <DisplayedDate> {this.state.date} </DisplayedDate>
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
            {this.state.currentDay.length > 5 ? (
              <BiggerText>{this.state.currentDay.length}</BiggerText>
            ) : (
              <BigText>{this.state.currentDay.length}</BigText>
            )}{" "}
            of <BigText>5</BigText>
            <DisplayedType>Fruits and Vegetables</DisplayedType>
          </DisplayedTotal>
        </HeadsUpDisplay>
        <SearchContainer>
          <SearchBar
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={e => this.searchItems(e)}
          />
          {this.state.searchTerm ? (
            <ClearSearchButton onClick={this.clearSearchTerm} />
          ) : null}
          <ItemList>
            {this.state.filteredData.length > 0
              ? this.state.filteredData.map(item => (
                  <Item key={item.key}>
                    <ItemImage />
                    <ItemTitle>{item.name}</ItemTitle>
                    <ItemAmount>
                      Eat {item.amount} {item.name.toLowerCase()} to count
                    </ItemAmount>
                    {this.state.currentDay.indexOf(`${item.name}`) > -1 ? (
                      <RemoveButton
                        onClick={() => this.handleRemoveItem(item.name)}
                      />
                    ) : (
                      <AddButton
                        onClick={() => this.handleAddItem(item.name)}
                      />
                    )}
                  </Item>
                ))
              : this.state.applicationData.map(item => (
                  <Item key={item.key}>
                    <ItemImage />
                    <ItemTitle>{item.name}</ItemTitle>
                    <ItemAmount>
                      Eat {item.amount} {item.name.toLowerCase()} to count
                    </ItemAmount>
                    {this.state.currentDay.indexOf(`${item.name}`) > -1 ? (
                      <RemoveButton
                        onClick={() => this.handleRemoveItem(item.name)}
                      />
                    ) : (
                      <AddButton
                        onClick={() => this.handleAddItem(item.name)}
                      />
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
