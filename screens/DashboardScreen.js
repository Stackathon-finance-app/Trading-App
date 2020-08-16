import React, { Component } from 'react';
import { View, Text } from 'react-native';
import alpacaApi from '../api/alpaca';

export default class DashboardScreen extends Component {
	static navigationOptions = {
		title : 'Home'
	};

	constructor(props) {
		super(props);

		this.state = {
			cash              : 0,
			buying_power      : 0,
			long_market_value : 0,
			portfolio_value   : 0
		};
	}

	componentDidMount() {
		console.log('fetching data from alpaca api');

		const alpaca = alpacaApi();

		alpaca.getAccount().then((res) => {
			console.log(res);

			if (res.ok) {
				this.setState({
					buying_power      : res.data.buying_power,
					long_market_value : res.data.long_market_value,
					cash              : res.data.cash,
					portfolio_value   : res.data.portfolio_value
				});
			}
		});
	}

	render() {
		return (
			<View>
				<Text>Dashboard</Text>
				<View>
					<Text>Buying Power : {this.state.buying_power}</Text>
					<Text>Cash : {this.state.cash}</Text>
					<Text>Long Market Value : {this.state.long_market_value}</Text>
					<Text>Portfolio Value : {this.state.portfolio_value}</Text>
				</View>
			</View>
		);
	}
}
