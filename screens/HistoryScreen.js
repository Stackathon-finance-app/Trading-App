import React, { Component } from 'react';
import { View, Text } from 'react-native';
import alpacaApi from '../api/alpaca';

class HistoryScreen extends Component {
	static navigationOptions = {
		title : 'Transaction History'
	};

	constructor(props) {
		super(props);

		this.state = {
			transactions : []
		};
	}

	componentDidMount() {
		const api = alpacaApi();

		api.getActivity().then((res) => {
			this.setState({
				transactions : res.data
			});
		});
	}

	render() {
		console.log(this.state.transactions);
		return (
			<View>
				<Text>Hello Activity Screen</Text>
				{this.state.transactions.map((transaction) => {
					<View>
						<Text>{transaction.symbol}</Text>
						<Text>
							{transaction.side} {transaction.qty} @ {transaction.price}
						</Text>
						<Text>{transaction.time}</Text>
					</View>;
				})}
			</View>
		);
	}
}

export default HistoryScreen;
