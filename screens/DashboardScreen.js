import React, { Component } from 'react';
import { View, Text } from 'react-native';
import alpacaApi from '../api/alpaca';

export default class DashboardScreen extends Component {
	static navigationOptions = {
		title : 'Home'
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		console.log('fetching data from alpaca api');
	}

	render() {
		return (
			<View>
				<Text>Dashboard</Text>
			</View>
		);
	}
}
