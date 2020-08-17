import React, { Component } from "react";
import { View, Text } from "react-native";
import alpacaApi from "../api/alpaca";

class HistoryScreen extends Component {
  static navigationOptions = {
    title: "Transaction History",
  };

  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    const api = alpacaApi();

    api.getActivity().then((res) => {
      this.setState({
        transactions: res.data,
      });
    });
  }

  render() {
    const history = this.state.transactions || [];
    console.log(history);
    return (
      <View>
        {history.map((transaction) => {
          return (
            <View
              key={transaction.id}
              style={{
                margin: 5,
                borderWidth: 1,
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {transaction.symbol}
              </Text>
              <Text>
                <Text style={{
                  fontSize: 20,
                  color: "black",
                }}>{transaction.side}</Text>: {transaction.qty} @ {transaction.price}
              </Text>
              <Text>{transaction.time}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default HistoryScreen;
