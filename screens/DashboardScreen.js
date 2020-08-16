import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DashboardScreen extends Component {
	static navigationOptions = {
		title : 'Home'
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View>
				<Text>Dashboard</Text>
			</View>
		);
	}
}
