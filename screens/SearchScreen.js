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

	updateCompany = (companyName) => {
		this.setState({ company: companyName });
	};

	render() {
		const { company } = this.state;
		const searchBar = (
			<SearchBar platform="ios" placeholder="Company Name..." onChangeText={this.updateCompany} value={company} />
		);
		const test = (
			<View>
				<Text>Hi</Text>
			</View>
		);
		return <View>{company === '' ? searchBar : test}</View>;
	}
}

export default SearchScreen;
