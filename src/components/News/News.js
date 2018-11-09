import React, {Component} from 'react';
import './News.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from "../../reducers/Reducers";
import NewsDispatch from "./NewsDispatch";
import NewsList from "../NewsList/NewsList";


class News extends Component {
	componentDidMount() {// вызывается при монтировании
		// console.log('componentDidMount');
		this.props.onLoadNewsList();
		// console.log('this:',this);
	}

	render() {
		console.log('this: ', this);
		return (
			<div className="news">
				<h1>News</h1>
				{this.props.store.ReducerNews.newsList &&
				<div>
					<NewsList newsList={this.props.store.ReducerNews.newsList}/>
				</div>
				}
			</div>
		);
	}
}

export default connect(mapStateToProps, NewsDispatch)(News);
