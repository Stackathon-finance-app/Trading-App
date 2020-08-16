import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import DashboardScreen from '../screens/DashboardScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';

const config = Platform.select({
	web     : { headerMode: 'screen' },
	default : {}
});

const DashboardStack = createStackNavigator(
	{
		Dashboard : DashboardScreen
	},
	config
);

DashboardStack.navigationOptions = {
	tabBarLabel : 'Home',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-speedometer' : 'md-speedometer'} />
	)
};

DashboardStack.path = '';

const SettingsStack = createStackNavigator(
	{
		Settings : SettingsScreen
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel : 'Settings',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
	)
};

SettingsStack.path = '';

const SearchStack = createStackNavigator(
	{
		Search : SearchScreen
	},
	config
);

SearchStack.navigationOptions = {
	tabBarLabel : 'Search',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
	)
};

SearchStack.path = '';

const HistoryStack = createStackNavigator(
	{
		History : HistoryScreen
	},
	config
);

HistoryStack.navigationOptions = {
	tabBarLabel : 'Home',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pulse' : 'md-pulse'} />
	)
};

HistoryStack.path = '';

const tabNavigator = createBottomTabNavigator({
	DashboardStack,
	SearchStack,
	SettingsStack,
	HistoryScreen
});

tabNavigator.path = '';

export default tabNavigator;
