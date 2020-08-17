import React from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import getArticles from '../api/news';

class SearchScreen extends React.Component {
	static navigationOptions = {
		title : 'Search'
	};
	constructor(props) {
		super(props);

		this.state = {
			company      : '',
			newsArticles : []
		};
	}

	// handleSubmit(event) {
	// 	event.preventDefault();
	// 	this.setState({
	// 		company : this.event.companyName.value
	// 	});
	// }

	componentDidMount() {
		getArticles('apple').then((res) => {
			this.setState({
				newsArticles : res.articles
			});
		});
	}

	// updateCompany = (company) => {
	// 	this.setState({ company });
	// };
	render() {
		// console.log('this.state.newsArticles[0] >>> ', this.state.newsArticles[0]);
		// const { company } = this.state;
		// const searchBar = (
		// 	<SearchBar platform="ios" placeholder="Company Name..." onChangeText={this.updateCompany} value={company} />
		// );
		// console.log('this company', { company });
		// return searchBar;
		const articles = this.state.newsArticles || [];
		return (
			<View>
				{articles.map((article) => {
					return (
						<View key={article.content}>
							<Text>Title : {article.title}</Text>
							<Text>Description: {article.description}</Text>
							<Text />
							<Text />
							<Text />
						</View>
					);
				})}
			</View>
		);
	}
}
export default SearchScreen;
