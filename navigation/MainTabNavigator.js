import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import SearchScreen from '../screens/SearchScreen';

const config = Platform.select({
	web     : { headerMode: 'screen' },
	default : {}
});

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

const tabNavigator = createBottomTabNavigator({
	SearchStack
});

tabNavigator.path = '';

export default tabNavigator;
