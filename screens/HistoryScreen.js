import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HistoryScreen extends Component {
	static navigationOptions = {
		title : 'Transaction History'
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View>
				<Text>Transaction History</Text>
			</View>
		);
	}
}
