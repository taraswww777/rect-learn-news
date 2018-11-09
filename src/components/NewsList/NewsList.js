import React, {Component} from 'react';
import './NewsList.scss';
import NewsDetail from "../NewsDetail/NewsDetail";


class NewsList extends Component {

	render() {
		return (
			<div className="news-list">
				{this.props.newsList && this.props.newsList.map((news) =>
					<div key={'news_' + news._id}>
						{console.log('news:', news)}
						<NewsDetail news={news}/>
					</div>
				)}
			</div>
		);
	}
}

export default NewsList;
