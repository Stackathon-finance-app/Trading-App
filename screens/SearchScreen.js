import React from 'react';
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
		return (
			<SearchBar platform="ios" placeholder="Company Name..." onChangeText={this.updateCompany} value={company} />
		);
	}
}

export default SearchScreen;
