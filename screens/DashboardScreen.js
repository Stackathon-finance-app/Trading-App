import React, { Component } from "react";
import { View, Text } from "react-native";
import alpacaApi from "../api/alpaca";
import {dashboardStyle} from "../styles/style"

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: "Home",
  };

  constructor(props) {
    super(props);

    this.state = {
      cash: 0,
      buying_power: 0,
      long_market_value: 0,
      portfolio_value: 0,
    };
  }

  componentDidMount() {
    console.log("fetching data from alpaca api");

    const alpaca = alpacaApi();

    alpaca.getAccount().then((res) => {
      console.log(res);

      if (res.ok) {
        this.setState({
          buying_power: res.data.buying_power,
          long_market_value: res.data.long_market_value,
          cash: res.data.cash,
          portfolio_value: res.data.portfolio_value,
        });
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>

        <View style={dashboardStyle.account}>
          <Text style={dashboardStyle.heading}>My Account</Text>

          <View style={dashboardStyle.accountBox}>

            <View style={dashboardStyle.leftBox}>
              <Text style={dashboardStyle.label}>Buying Power</Text>
							<Text>$ {this.state.buying_power}</Text>
              <Text style={dashboardStyle.label}>Long Market Value</Text>
							<Text>$ {this.state.long_market_value}</Text>
            </View>

            <View style= {dashboardStyle.rightBox}>
              <Text style={dashboardStyle.label}>Portfolio Value</Text>
							<Text>$ {this.state.portfolio_value}</Text>
              <Text style={dashboardStyle.label}>Cash</Text>
							<Text>$ {this.state.cash}</Text>
            </View>

          </View>
        </View>

        <View style={{ flex: 2, borderWidth: 1, borderColor: "red" }}>
          <Text>Market</Text>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
              <Text>DTA</Text>
            </View>
            <View style={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
              <Text>SPY</Text>
            </View>
            <View style={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
              <Text>QQQ</Text>
            </View>
            <View style={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
              <Text>IWM</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 5, borderWidth: 1, borderColor: "blue" }}></View>
      </View>
    );
  }
}
