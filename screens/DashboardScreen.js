import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import alpacaApi from '../api/alpaca';
import { dashboardStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
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
			portfolio_value   : 0,
			positions         : []
		};
	}

	componentDidMount() {
		const alpaca = alpacaApi();

		alpaca.getAccount().then((res) => {
			if (res.ok) {
				this.setState({
					buying_power      : res.data.buying_power,
					long_market_value : res.data.long_market_value,
					cash              : res.data.cash,
					portfolio_value   : res.data.portfolio_value
				});
			}
		});

		alpaca.getPositions().then((res) => {
			if (res.ok) {
				this.setState({
					positions : res.data
				});
			}
		});
	}

	renderRow = (item) => {
		return (
			<View key={item.asset_id} style={dashboardStyle.position}>
				<View style={dashboardStyle.positionsLeftBox}>
					<Text style={dashboardStyle.symbol}>{item.item.symbol}</Text>
					<Text style={dashboardStyle.subheading}>
						{item.item.qty} @ {item.item.avg_entry_price}
					</Text>
				</View>
				<View style={dashboardStyle.positionsRightBox}>
					<Text style={dashboardStyle.price}>{item.item.current_price}</Text>
					<Ionicons name="md-arrow-dropup" size={33} color="green" />
					<Text style={dashboardStyle.subheading}>{(item.item.change_today * 100).toFixed(2)}</Text>
				</View>
			</View>
		);
	};

	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column' }}>
				<View style={dashboardStyle.account}>
					<Text style={dashboardStyle.heading}>My Account</Text>

					<View style={dashboardStyle.accountBox}>
						<View style={dashboardStyle.leftBox}>
							<Text style={dashboardStyle.label}>Buying Power</Text>
							<Text>$ {this.state.buying_power}</Text>
							<Text style={dashboardStyle.label}>Long Market Value</Text>
							<Text>$ {this.state.long_market_value}</Text>
						</View>

						<View style={dashboardStyle.rightBox}>
							<Text style={dashboardStyle.label}>Portfolio Value</Text>
							<Text>$ {this.state.portfolio_value}</Text>
							<Text style={dashboardStyle.label}>Cash</Text>
							<Text>$ {this.state.cash}</Text>
						</View>
					</View>
				</View>

				<View style={{ flex: 2, borderWidth: 1, borderColor: 'red' }}>
					<Text>Market Information</Text>

					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
							<Text>DTA</Text>
						</View>
						<View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
							<Text>SPY</Text>
						</View>
						<View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
							<Text>QQQ</Text>
						</View>
						<View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
							<Text>IWM</Text>
						</View>
					</View>
				</View>

				<View style={{ flex: 5, borderWidth: 1, borderColor: 'blue' }}>
					{/* {this.state.positions.map(position => {
						return <Text>
							{position.symbol}
						</Text>
					})} */}
					<FlatList
						data={this.state.positions}
						renderItem={this.renderRow}
						keyExtractor={(item) => item.asset_id}
					/>
				</View>
			</View>
		);
	}
}
