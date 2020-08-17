import React from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
class SearchScreen extends React.Component {
	static navigationOptions = {
		title : 'Search'
	};
	constructor(props) {
		super(props);
		this.state = {
			company : ''
		};
	}

	updateCompany = (company) => {
		this.setState({ company });
	};
	render() {

		const { company } = this.state;
		const searchBar = (
			<SearchBar platform="ios" placeholder="Company Name..." onChangeText={this.updateCompany} value={company} />
		);

		console.log('this company', { company });
		return searchBar;

	}
}
export default SearchScreen;
