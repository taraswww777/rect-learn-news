import React, {Component} from 'react';
import './NewsDetail.scss';

class NewsDetail extends Component {
	render() {
		return (
			<div className="news-detail">
				{this.props.news._id}
			</div>
		);
	}
}

export default NewsDetail;
