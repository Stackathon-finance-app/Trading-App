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
		const history = this.state.transactions || []
		console.log(history);
		return (
			<View>
				{history.map(transaction => {
					console.log('inside dis WAP', transaction);
						return (
						<View>
						<Text>{transaction.symbol}</Text>
						<Text>
							{transaction.side} {transaction.qty} @ {transaction.price}
						</Text>
						<Text>{transaction.time}</Text>
						</View>
						)
				})}

			</View>
		);
	}
}

export default HistoryScreen;
